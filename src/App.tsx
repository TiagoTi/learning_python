import React from 'react';
import { Header } from 'semantic-ui-react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

const App: React.FC = () => {


  return (

    <div>
      <header>
        <Header as='h1'>TestFirst.org</Header>
        <Header as='h2'>the home of test-first teaching</Header>
      </header>
      <div>
        <Grid divided='vertically'>
          <Grid.Row>
            <Grid.Column>
              <Menu fluid vertical tabular>
                <Menu.Item name='bio' />
                <Menu.Item name='bio' />
              </Menu>
            </Grid.Column>
            <Grid.Column>
              fasfsd
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <footer>
        <Grid>
          <Grid.Row>
            <Grid.Column stretched width={12}>
              <Segment>
                This is an stretched grid column. This segment will always match the
                tab height
          </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </footer>
    </div>
  );
}

export default App;
