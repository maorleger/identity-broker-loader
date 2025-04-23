import { DefaultAzureCredential, InteractiveBrowserCredential } from "@azure/identity";

async function main() {
	const credential = new InteractiveBrowserCredential({brokerOptions: {enabled: true, parentWindowHandle: "test"}});
	const token = await credential.getToken("https://management.azure.com/.default");
	console.log(token);
}

main()
	.then(() => console.log("done"))
	.catch((err) => {
		console.error("Error:", err);
		process.exit(1);
	});