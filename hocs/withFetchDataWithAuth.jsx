import { useFetchWithAuth } from "../hooks/api-hooks";
import { useLocalSearchParams } from 'expo-router';
export const withFetchDataWithAuth = (WrappedComponent, getApi) => {
  return (props) => {
    const { slug } = useLocalSearchParams();

    const { data, isLoading } = useFetchWithAuth(getApi(slug));

    if (isLoading) return;
    return <WrappedComponent {...props} data={data} />;
  };
};
