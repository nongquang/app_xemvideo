import React, { Component } from 'react';
import { Container, Header,Input,Item,Button,Right, Tab, Tabs, TabHeading, Icon, Text,View,Thumbnail } from 'native-base';
import Tab1 from './tabs/1TrongNuoc';
import Tab2 from './tabs/2QuocTe';
import Tab3 from './tabs/3CauLacBo';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container style={{ backgroundColor:'#D5DAEF'}}> 
        
        <View style={{marginLeft:160}}>
            <Thumbnail style={{width:70}} square source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Bong-da-tv-logo.png' }} />
        </View>
        <View style={{marginTop: -50,marginLeft: 330}}>
            <Button transparent>
              <Icon name='person' />
            </Button>
          </View>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="star-half" /><Text>Trong Nuoc</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="flame" /><Text>Quoc Te</Text></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="bookmarks" /><Text>Cau Lac Bo</Text></TabHeading>}>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
