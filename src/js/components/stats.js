import React from 'react';
import { connect } from 'react-redux';
import { Card, Image, Table } from 'semantic-ui-react'

class Stats extends React.Component {

  render(props) {
    console.log("playerInfo", this.props.playerInfo)
    return (
        <Card>
          <Image src={this.props.data[0].image ? this.props.data[0].image : ''} />
          <Card.Content>
            <Card.Header>
              {this.props.playerInfo[0].displayFirstLast}
            </Card.Header>
          </Card.Content>

          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center">Stat</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Value</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell textAlign="center">
                  Effg:
                </Table.Cell>
                <Table.Cell textAlign="center">
                  {this.props.data[0].efgPct}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell textAlign="center">
                  Def Rtg:
                </Table.Cell>
                <Table.Cell textAlign="center">
                  {this.props.data[0].defRating}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell textAlign="center">
                  Off Rtg:
                </Table.Cell>
                <Table.Cell textAlign="center">
                  {this.props.data[0].offRating}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell textAlign="center">
                  Assist/TO:
                </Table.Cell>
                <Table.Cell textAlign="center">
                  {this.props.data[0].astTo}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell textAlign="center">
                  PIE:
                </Table.Cell>
                <Table.Cell textAlign="center">
                  {this.props.data[0].pie}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Card>
    )
  }
}

export default connect()(Stats);
