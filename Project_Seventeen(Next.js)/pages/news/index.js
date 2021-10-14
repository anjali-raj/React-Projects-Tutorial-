//domain/news

import { Fragment } from "react";
import Link from 'next/link';

function NewsPage() {
    return <Fragment>
        <h1>The News Page</h1>
        <ul>
            <li>
                <Link href="/news/nextjs-is-a-great-framework">NextJS is a great Framework</Link>
            </li>
            <li>
                <Link href="/news/prolly-the-best">NextJS is a prolly a great Framework IDK</Link>
            </li>
        </ul>
        </Fragment>;
 }
 export default NewsPage;