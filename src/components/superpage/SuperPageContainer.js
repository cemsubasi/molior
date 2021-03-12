import SuperList from "./SuperList";
import SuperForm from "./SuperForm";
import SuperHeader from "./SuperHeader";
import NewFooter from "../../common/NewFooter";

export default function SuperPageContainer() {
	return (
		<SuperHeader>
			<SuperList />
			<SuperForm />
			<NewFooter />
		</SuperHeader>
	);
}
