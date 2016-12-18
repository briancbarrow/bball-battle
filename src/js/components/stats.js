import React from 'react';
import { connect } from 'react-redux';
import { Card, Image, Table } from 'semantic-ui-react'

class Stats extends React.Component {

  render(props) {
    return (
        <Card className='playerCard'>
          <Image src={`http://stats.nba.com/media/players/230x185/${this.props.playerInfo[0].personId}.png`} size="small" centered/>
          <Card.Content>
            <Card.Header>
              {this.props.playerInfo[0].displayFirstLast}
            </Card.Header>
          </Card.Content>

          <Table celled inverted>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center">Stat</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Value</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell textAlign="center">
                  Effective FG%:
                </Table.Cell>
                <Table.Cell textAlign="center">
                  {this.props.data[0].efgPct}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell textAlign="center">
                  Defensive Rating:
                </Table.Cell>
                <Table.Cell textAlign="center">
                  {this.props.data[0].defRating}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell textAlign="center">
                  Offensive Rating:
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

const mapStateToProps = (state) => {
  return {
      id1: state.id1,
      id2: state.id2,
      data1: state.data1,
      data2: state.data2,
      player1: state.player1,
      player2: state.player2
  }
}

export default connect(mapStateToProps, null)(Stats);
