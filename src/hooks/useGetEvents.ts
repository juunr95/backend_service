import {useCallback, useEffect, useState} from "react";
import {EventInterface} from "../models/Event";
import {gql, OnDataOptions, useQuery, useSubscription} from "@apollo/client";
import { useApolloClient } from '@apollo/client/react';

const SUBSCRIPTION_EVENTS = gql`
  subscription Events {
    events ( order_by: { createdAt: desc }, limit: 1) {
      id,
      name,
      description,
      image_url,
      location,
      city {
        id,
        name,
        state,
      }
    }
  }
`

const GET_EVENTS = gql`
  query Events($where: events_bool_exp!) {
    events (where: $where) {
      id,
      name,
      description,
      image_url,
      location,
      city {
        id,
        name,
        state,
      }
    }
  }
`


const useGetEvents = () => {
	const [events, setEvents] = useState<EventInterface[]>([]);
	const [shouldSkip, setShouldSkip] = useState<boolean>(true);
	const apollo = useApolloClient();

	const onSubscriptionData = useCallback(
		(result: OnDataOptions) => {
			const { data } = result.data;

			if (!events.find(el => el.id === data.events[0].id)) {
				updateEvents(data.events);
			}
	}, [events]);

	const { data: queryData, loading: loadingQuery } = useQuery(GET_EVENTS, {variables: { "where": {} }});

	useSubscription(SUBSCRIPTION_EVENTS, {
		onData: onSubscriptionData,
		shouldResubscribe: true,
		skip: shouldSkip || loadingQuery,
	})

	useEffect(() => {
		const { events } = queryData ?? {};

		if (events) {
			setEvents(events);
		}
	}, [queryData]);

	function updateEvents(updatedEvents: EventInterface[]) {
		setEvents(prevState => [...prevState, ...updatedEvents]);
		setShouldSkip(false);
	}

	async function searchEvent(name: string, city: string) {
		const variables = { "where": {} };

		if (name.length) {
			Object.assign(variables.where, {
				"name": {
					"_ilike": `%${name}%`,
				}
			})
		}

		if (city) {
			Object.assign(variables.where, {
				"location": {
					"_eq": Number(city),
				}
			})
		}

		const { data } = await apollo.query({ query: GET_EVENTS, variables, fetchPolicy: "network-only" });

		setEvents(data.events);
	}

	return {
		events,
		loadingQuery,
		updateEvents,
		searchEvent
	}
}

export default useGetEvents;