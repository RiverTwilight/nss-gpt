const REQUEST_HEADER = {
	"content-type": "application/json",
	"sec-fetch-mode": "cors",
	"sec-fetch-site": "same-origin",
};

class Client {
	constructor({ onError = () => {}, onFinished = () => {}, host }) {
		this.onError = onError;
		this.onFinished = onFinished;
		this.host = host;
	}

	FETCH_PARAMATERS = {
		referrerPolicy: "strict-origin-when-cross-origin",
		referrer: this.host,
		mode: "cors",
		credentials: "include",
		headers: REQUEST_HEADER,
	};

	getSubmissonResult({ uuid, id }, onSuccess, onError) {
		fetch(`${this.host}/get_result/`, {
			method: "POST",
			body: JSON.stringify({
				uuid: uuid,
				submit_id: id,
			}),
			...this.FETCH_PARAMATERS,
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.code !== 200) {
					onError && onError(data.message.error);
					this.onError(data.message.error);
				} else {
					onSuccess(data);
				}
			});
	}

	generateUUID({ nssKey, nssSecret }, onSuccess) {
		fetch(`${this.host}/get_user_id/`, {
			method: "POST",
			body: JSON.stringify({
				nss_key: nssKey.trim(),
				nss_secret: nssSecret.trim(),
			}),
			...this.FETCH_PARAMATERS,
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.code === 200 || data.code === 204) {
					onSuccess(data);
				} else {
					this.onError(data.message.error);
				}
			})
			.finally(this.onFinished);
	}

	getHistory(uuid, onSuccess) {
		fetch(`${this.host}/get_history/`, {
			method: "POST",
			body: JSON.stringify({ uuid }),
			...this.FETCH_PARAMATERS,
		})
			.then((response) => response.json())
			.then((data) => {
				onSuccess(data);
			})
			.finally(this.onFinished);
	}

	getScore(id, onSuccess) {
		fetch(`${this.host}/settle/`, {
			method: "POST",
			body: JSON.stringify({ uuid: id }),
			...this.FETCH_PARAMATERS,
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.code === 200) {
					onSuccess(data);
				}
			})
			.finally(this.onFinished);
	}

	getProblems(id, onSuccess) {
		fetch(`${this.host}/challenge/`, {
			method: "POST",
			body: JSON.stringify({ uuid: id }),
			...this.FETCH_PARAMATERS,
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.code == 200) {
					onSuccess(data);
				}
			})
			.catch((e) => {
				this.onError(e);
			})
			.finally(this.onFinished);
	}

	submit = ({ challenge_name, prompt, uuid }, onSuccess) => {
		fetch(`${this.host}/submit/`, {
			method: "POST",
			body: JSON.stringify({
				challenge_name,
				prompt,
				uuid,
			}),
			...this.FETCH_PARAMATERS,
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.code !== 200) {
					this.onError(data.message.error);
				} else {
					onSuccess(data);
				}
			})
			.finally(this.onFinished);
	};
}

export default Client;
