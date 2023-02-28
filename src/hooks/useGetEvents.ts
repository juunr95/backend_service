import {useCallback, useEffect, useState} from "react";
import {EventInterface} from "../models/Event";
import {gql, useQuery } from "@apollo/client";
import { useApolloClient } from '@apollo/client/react';

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
	const apollo = useApolloClient();

	const onCompleted = useCallback((data: any) => {
		setEvents(data.events);
	}, []);

	const { data, loading }
		= useQuery(GET_EVENTS, {
			variables: { "where": {} },
		  onCompleted,
		});

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

		const { data } = await apollo.query({
			query: GET_EVENTS,
			variables,
			fetchPolicy: "network-only",
		});

		onCompleted(data);
	}

	return {
		events,
		loading,
		searchEvent
	}
}

export default useGetEvents;