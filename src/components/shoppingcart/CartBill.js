import React from "react";
import { Table, Header, Icon } from "semantic-ui-react";

function CartBill({ props }) {
	return (
		<Table
			basic="very"
			style={{
				marginTop: "2em",
				margin: "auto",
				minWidth: "200px",
			}}
			celled
			collapsing
		>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell style={{ fontSize: "1.33em" }}>
						Sipariş Özeti
					</Table.HeaderCell>
					<Table.HeaderCell style={{ fontSize: "1.13em", textAlign: "right" }}>
						<Icon name="try" />
					</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>
						<Header as="h4" image>
							<Header.Content>Ürünler Toplam</Header.Content>
						</Header>
					</Table.Cell>
					<Table.Cell textAlign="right">
						{props.state.reduce((total, curr) => total + +curr.price, 0) +
							" TL"}
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>
						<Header as="h4">İndirim</Header>
					</Table.Cell>
					<Table.Cell textAlign="right">
						{props.state.reduce(
							(total, curr) => total - (curr.discount * +curr.price) / 100,
							0
						) + " TL"}
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>
						<Header as="h4">Ürün Adedi</Header>
					</Table.Cell>
					<Table.Cell textAlign="right">{props.state.length}</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>
						<Header as="h4">Tutar</Header>
					</Table.Cell>
					<Table.Cell textAlign="right">
						{props.state.reduce(
							(total, curr) =>
								total + +curr.price - (curr.discount * +curr.price) / 100,
							0
						) + " TL"}
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
	);
}
export default CartBill;
