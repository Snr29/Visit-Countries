import {Component} from 'react'
import {
  AppComponent,
  Heading,
  CountriesList,
  ListItem,
  ListPara,
  ListButton,
  VisitiedList,
  VisitedListRenderer,
  ListItem1,
  EmptyHeader,
  ItemBox,
  ThumbItem,
  NameBox,
  NameOfItem,
  DeleteButton,
} from './styledComponents'

export default class VisitCountries extends Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    list: this.props.list,
  }

  onClickChangeVisit = id => {
    // console.log('clicked', id)
    this.setState(prevState => ({
      list: prevState.list.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isVisited: !eachItem.isVisited}
        }
        return eachItem
      }),
    }))
  }

  onRemoveVisit = id => {
    // console.log('removed', id)
    this.setState(prevState => ({
      list: prevState.list.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isVisited: !eachItem.isVisited}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {list} = this.state
    // console.log('list', list)
    return (
      <AppComponent>
        <Heading>Countries</Heading>
        <CountriesList>
          {list.map(e => (
            <ListItem key={e.id}>
              <ListPara>{e.name}</ListPara>
              {e.isVisited ? (
                <p
                  style={{
                    font: 'Roboto',
                    color: '#94a3b8',
                    marginRight: '5px',
                    marginBottom: '10px',
                  }}
                >
                  Visited
                </p>
              ) : (
                <ListButton
                  isVisit={e.isVisited}
                  type="button"
                  onClick={() => this.onClickChangeVisit(e.id)}
                >
                  Visit
                </ListButton>
              )}
            </ListItem>
          ))}
        </CountriesList>
        <VisitiedList>
          <h1
            style={{color: '#ffffff', fontFamily: 'Roboto', fontWeight: 'bold'}}
          >
            Visited Countries
          </h1>
          {list.length > 0 ? (
            <VisitedListRenderer>
              {list.map(e =>
                e.isVisited ? (
                  <ListItem1 key={e.id}>
                    <ItemBox>
                      <ThumbItem src={e.imageUrl} alt="thumbnail" />
                      <NameBox>
                        <NameOfItem>{e.name}</NameOfItem>
                        <DeleteButton
                          type="button"
                          onClick={() => this.onRemoveVisit(e.id)}
                        >
                          Remove
                        </DeleteButton>
                      </NameBox>
                    </ItemBox>
                  </ListItem1>
                ) : (
                  ''
                ),
              )}
            </VisitedListRenderer>
          ) : (
            <EmptyHeader>No Countries Visited Yet!</EmptyHeader>
          )}
        </VisitiedList>
      </AppComponent>
    )
  }
}
