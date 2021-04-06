import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

export const Layout = (props) => {
  const head = () => (
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="/static/css/styles.css" />
    </Head>
  );

  const nav = () => {
    return (
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link text-light">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/login">
            <a className="nav-link text-light">Login</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/signup">
            <a className="nav-link text-light">Sign up</a>
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <Fragment>
      {head()} {nav()}
      <div className="container pt-5 pb-5">{props.children}</div>
    </Fragment>
  );
};
