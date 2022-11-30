import React, { useState } from "react";
import * as Realm from "realm-web";

const REALM_APP_ID = "";
// Place Your MongoDB APP ID here
const app = new Realm.App({ id: REALM_APP_ID });

// Create a component that lets an anonymous user log in
function Login({ setUser }) {
	const loginAnonymous = async () => {
		const user = await app.logIn(Realm.Credentials.anonymous());
		setUser(user);
	};
	return <div onClick={loginAnonymous()}></div>;
}
const App = ({ Component, pageProps, router }) => {
	// Keep the logged in Realm user in local state. This lets the app re-render
	// whenever the current user changes (e.g. logs in or logs out).
	const [user, setUser] = React.useState(app.currentUser);

	// If a user is logged in, show their details.
	// Otherwise, show the login screen.
	return (
		<div>
			<div>{user ? <div></div> : <Login setUser={setUser} />}</div>
			<Component {...pageProps} />
			<style jsx global>{`
				body {
					margin: 0px;
					padding: 0px;
					color: #333;
					font-family: "Roboto";
					background-color: #fff;
				}
			`}</style>
		</div>
	);
};

export default App;
