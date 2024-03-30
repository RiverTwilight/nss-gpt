import siteConfig from "../../site.config";
import Client from "./client";

const apiClient = new Client({
	host: siteConfig.api_host,
});

export default apiClient;
