import SuperList from "./SuperList";
import SuperForm from "./SuperForm";
import SuperHeader from "./SuperHeader";
import Footer from "../../common/Footer";

export default function SuperPageContainer() {
	return (
		<SuperHeader>
			<SuperList />
			<SuperForm />
			<Footer />
		</SuperHeader>
	);
}
