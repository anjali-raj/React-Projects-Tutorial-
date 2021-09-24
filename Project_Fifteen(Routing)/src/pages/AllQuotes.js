import { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import { getAllQuotes } from '../lib/api';

const AllQuotes = () => {

    const {sendRequest, status, data: loadedQuote, error} = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
    },[sendRequest]);

    if(status === 'pending') {
        return (
        <div className="centered focused">
            <LoadingSpinner /> 
        </div>
        );
    }

    if(status === 'completed' && (!loadedQuote || loadedQuote.length === 0)) {
        return <NoQuotesFound />
    }

    if(error) {
        return (
        <div className="centered">
            <p>{error}</p>
        </div>
        );
    }

   return <QuoteList quotes={loadedQuote} />
}
export default AllQuotes;