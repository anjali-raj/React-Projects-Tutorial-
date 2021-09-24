import { Fragment, useEffect } from "react";
import { Route, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
//import QuoteItem from "../components/quotes/QuoteItem";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();
    const {quoteId} = params;
    
    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if(status === 'pending') {
        return (
        <div className="centered">
            <LoadingSpinner />
        </div>
        );
    };

    if(error) {
        return (
        <div className="centered">
            <p>{error}</p>
        </div>
        );
    };

    if(!loadedQuote.text) {
        return <p>No Quote Found</p>;
    }

    return <Fragment>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
        <Route path={match.path} exact>
          <div className='centered' >
              <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
          </div>
        </Route>
        <Route path={`${match.path}/comments`}>
           <Comments />
        </Route>
        </Fragment>
}
export default QuoteDetail;