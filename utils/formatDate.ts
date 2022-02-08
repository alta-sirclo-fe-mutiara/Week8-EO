import jwtDecode from "jwt-decode";
import moment from "moment";

type Token = {
	authorized: boolean;
	exp: number;
	id: number;
};
const changeToDate = (date: number) => {
	const dateToken = new Date(date);
	const exp = moment(dateToken).format("HH:mm");
	return exp;
};

const formatDate = (key: string) => {
	const local = localStorage.getItem(key) || "{}";
	const isToken = JSON.parse(local);
	if (isToken.token) {
		const decode: Token = jwtDecode(isToken.token);
		const now = new Date().getTime();
		const date = decode.exp * 1000;
		const dateToken = changeToDate(date);
		const dateNow = changeToDate(now);

		if (dateNow > dateToken) {
			localStorage.removeItem(key);
			window.location.reload();
		}
	}
};

const tokenLocal = (key: string) => {
	const isServer = typeof window === "undefined";
	let tokenId;
	if (!isServer) {
		const local = localStorage.getItem(key) || "{}";
		const isToken = JSON.parse(local);

		if (isToken.token) {
			const decode: Token = jwtDecode(isToken.token);
			tokenId = decode.id;
		}
	}

	return tokenId;
};

const breakDate = (datetime: string) => {
	const dateEvents = moment(datetime).format("MMMM, Do, YYYY");
	const ddEvents = moment(datetime).format("DD");
	const mmEvents = moment(datetime).format("MMM");
	const timeEvent = moment(datetime).format("LT");

	return { dateEvents, ddEvents, mmEvents, timeEvent };
};
export { formatDate, breakDate, tokenLocal };
