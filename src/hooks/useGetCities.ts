import {gql, useQuery} from "@apollo/client";
import {useCallback, useState} from "react";

interface City {
	id: number;
	name: string;
}

const GET_CITIES = gql`
  query Cities {
    cities (order_by: { name: asc }) {
      id,
      name
    }
  }
`

const useGetCities = () => {
	const [cities, setCities] = useState<City[]>([]);

	const onCompleted = useCallback((data: any) => {
		setCities(data.cities);
	}, []);

	useQuery(GET_CITIES, {
		onCompleted
	});


	return { cities };
}

export default useGetCities;