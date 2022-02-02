import React from 'react';
import './App.css';
import { Accordion,AccordionPanel,Anchor, Box,Card,CardHeader,CardFooter,CardBody,Grommet,Grid,Footer,Text, Nav,Button, Header,Tip, Tabs, Tab, CheckBoxGroup, Paragraph} from 'grommet';
//import { } from 'grommet-icons';
import {
    Grommet as GrommetIcon,
    FacebookOption,
    Instagram,
    Twitter,
    Notification,
    Home,
    UserFemale,
    Info,
    Favorite,
    ShareOption,
  } from 'grommet-icons';

    const UserImage = "https://wallpaperaccess.com/full/5118783.jpg";
    const Items = [
      {label:'HTML', href:'#'},
      {label:'CSS', href:'#'},
      {label:'Java SCRIPT',href:'#'},
      {label:'REACT JS', href:'#'},
    ];
  const Media = () => (
    <Box direction="row" gap="xxsmall" justify="center">
      <Anchor
        a11yTitle="Share feedback on Github"
        href="https://www.instagram.com/"
       icon={<Instagram color="brand" />}
     />
       <Anchor
         a11yTitle="Chat with us on Slack"
         href="https://www.facebook.com/"
         icon={<FacebookOption color="brand" />}
       />
       <Anchor
         a11yTitle="Follow us on Twitter"
         href="https://twitter.com/"
         icon={<Twitter color="brand" />}
       />
     </Box>
   );
   const  Circle = ({ ...rest }) => (
    <Box
       animation={['fadeIn', 'pulse']} // double animation
       round="full"
       background="linear-gradient(102.77deg, #FD6FFF -9.18%, #ffdde2 209.09%)"
       {...rest}
     />
   );
function App() {
  return (
    
    <Grommet>
      {/* <Box align="center" animation={{"type":"slideLeft","Size":"small"}}  background={{"color":"accent-1"}} border={{"color":"black","style":"dotted","side": "top"}} pad="small">
        <Paragraph size="large" textAlign="center" margin="large" color="black" fill background={{"color":"red"}}>
           Welcome to Grommet Components
       </Paragraph>
      </Box> */}
    <Grid
     rows={['xxsmall', 'medium', 'xsmall']}
      columns={['1/4']}
      areas={[
        ['header', 'header'],
        ['sidebar', 'main'],
        ['footer', 'footer'],
      ]}
      gap="small"
    >
      <Box background="dark-3" gridArea="header">
         <Header pad='small'>
           Header
             <Box direction='row' align='center' gap='small'>
                <Anchor src={UserImage} />
                {/* <Anchor color='white' href='#'>Desu Brahma</Anchor> */}
                 <Tip background='dark-3' 
                   content={
                     <Box align='center' background='dark-2' justify='center'>
                        It is User Name....
                     </Box>
                   }
                 >
                   <Anchor color='white' href='#'>Desu Brahma</Anchor> 
                 </Tip>
             </Box>
             <Nav direction='row' pad='small'>
               {
                 Items.map((item) =>(
                    <Anchor  label={item.label} href={item.href} key={item.label} />
                 ))
               }
             </Nav>
         </Header>
         
      </Box>

      <Box background="light-5" gridArea="sidebar">
        {/* Sidebar */}
        <Tabs>
           <Tab title='Tab 1'>
              <Box>First Tab</Box>
           </Tab>
           <Tab title='Tab 2'>
              <Box>Second Tab</Box>
           </Tab>
         </Tabs>
         <CheckBoxGroup direction='row' pad='medium' id ='check'options={['Male','female','other']} />
         <Paragraph>JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[14] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles.</Paragraph>
      </Box>

      <Box background="light-4" gridArea="main">
        <Accordion>
            <AccordionPanel label='Accordion'>
                <Box background='light-4' overflow='auto' height='medium'>
                    <Box height='large' flex='flex'>
                    Venkatesh Prabhu Kasthuri Raja (born 28 July 1983),[3] known professionally as Dhanush, is an Indian actor, producer, director, lyricist and playback singer who predominantly works in Tamil cinema.[4] Starring in 46 films over his career, among Dhanush's awards include 13 SIIMA Awards, nine Vijay Awards, seven Filmfare Awards South, five Vikatan Awards, five Edison Awards, four National Film Awards (two as actor and two as producer), and a Filmfare Award.[5] He has been included in the Forbes India Celebrity 100 list six times, which is based on the earnings of Indian celebrities.[6]
                    </Box>
                </Box>
            </AccordionPanel>
        </Accordion>
       <Button label='facebook'><Anchor href='www.facebook.com' /></Button> 
        <Nav direction='row' pad='small'>
          Nav 
          <Anchor hoverIndicator><Home/></Anchor>
          <Anchor > <Notification /></Anchor>
          <Anchor href='#'>Anchor</Anchor>
        </Nav>
        <Box align="center" justify="center" fil gap="medium">
          <Tip
            plain
            dropProps={{ align: { left: 'right' } }}
            content={
              <Box align="start" margin={{ bottom: 'xlarge' }} pad="xsmall">
                <Circle margin={{ left: 'large' }} pad="small">
                  <Info color="accent-1" />
                </Circle>
                <Circle margin={{ left: 'medium' }} pad="small" />
                <Circle pad="xsmall" />
              </Box>
            }
          >
            <Button icon={<UserFemale color="accent-1" size="large" />} />
         </Tip>
            Tip
        </Box>
        <Card  height="small" width="small" background="light-1">
          <CardHeader pad="medium">Card Header</CardHeader>
          <CardBody pad="medium">Card Body</CardBody>
          <CardFooter  background="dark-1">
            <Button> <Favorite/> </Button>
            <Button><ShareOption/></Button>
          </CardFooter>
        </Card>
   </Box>
       
   <Box background="dark-3" gridArea="footer" justify="center">
     {/* <Text textAlign="center" size="small">
        © 2022 Copyright Grommet
     </Text> */}
         <Footer background="light-4" pad="small">
      <Box align="center" direction="row" gap="xsmall">
        <GrommetIcon color="brand" size="medium" />
        <Text alignSelf="center" color="brand" size="small">
          Grommet
        </Text>
        <Button label='
            accent-2' color ='#FD6FFF'/>
          <Button label='dark-1' color ='#333333'/>
         <Button label='status-error' color ='#FF4040'/>
         <Button label='neutral-1' color ='#00873D'/>
         <Button label='Status-Warning' color='#FFAA15'/>
      </Box> 
      <Media />
      <Text textAlign="center" size="xsmall">
        © 2022 All Copyright Grommet
      </Text>
   </Footer>
      </Box>
       
    
    </Grid>
  </Grommet>
  );
}

export default App;
