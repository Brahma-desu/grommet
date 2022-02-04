import React from 'react';
import './App.css';
import { Accordion,AccordionPanel,Anchor, Box,Card,CardHeader,CardFooter,CardBody,Grommet,Grid,Footer,Text, Nav,Button, Header,Tip, Tabs, Tab, CheckBoxGroup, Paragraph, DateInput, FileInput, Form, FormField, TextInput, RadioButtonGroup, RangeInput, Select, TextArea, Avatar, Calendar, Clock, DataTable, Heading, Distribution, NameValueList, NameValuePair, Pagination, Meter} from 'grommet';
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
    Search,
  } from 'grommet-icons';

    const UserImage = "https://wallpaperaccess.com/full/5118783.jpg";
    const Items = [
      {label:'HTML', href:'#'},
      {label:'CSS', href:'#'},
      {label:'Java SCRIPT',href:'#'},
      {label:'REACT JS', href:'#'},
    ];
    const photo = 'https://i.ytimg.com/vi/YojncBzR3bk/maxresdefault.jpg';
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
    const RadioOptiions = [
      {label:'Male',value:'Male'},
      {label:'Female',value:'Female'},
      {label:'Other',value:'Other'},
    ];

    const Data = [
      {
        name:'Dhanush',
        free:20,
        size:4,
      },
      {name:'Bramha',free:50,size:10},
      {name:'Desu',free:30,size:20},
    ];
    const cloumns = [
      {property: 'name', header: 'User Name', size: 'small'},
      {
            property: 'size',
            header: 'Telugu',
            size: 'xsmall',
            align: 'end',
      
          },
          {
            property: 'size',
            header: 'English',
            size: 'xsmall',
            align: 'end',
            
          },
    ];
function App() {
  const [value , setValue] = React.useState(5);
  const onChange = event => setValue(event.target.value);
  return (
    
    <Grommet>
      {/* <Box align="center" animation={{"type":"slideLeft","Size":"small"}}  background={{"color":"accent-1"}} border={{"color":"black","style":"dotted","side": "top"}} pad="small">
        <Paragraph size="large" textAlign="center" margin="large" color="black" fill background={{"color":"red"}}>
           Welcome to Grommet Components
       </Paragraph>
      </Box> */}
    <Grid
     rows={['xxsmall', 'xlarge', 'xsmall']}
      columns={['1/4']}
      areas={[
        ['header', 'header'],
        ['sidebar', 'main'],
        ['footer', 'footer'],
      ]}
      gap="small"
    >
      <Box background="dark-3" gridArea="header">
         <Header pad='xxsmall'>
           Header
             <Box direction='row' align='center' gap='small'>
                <Anchor src={UserImage}/>
                <Avatar src={photo} />
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
          <Box align='center' justify='center' pad='small'>
            <Form>
              <label >Form</label>
              <FormField label='User Name' name='Name' required >
                  <TextInput type='name' name='Name'/>
              </FormField>
              <FormField label='User E-mail' name='email' required >
                  <TextInput type='email' name='email'/>
              </FormField>
            </Form>
          </Box>
          <RadioButtonGroup name='radio' options={RadioOptiions} ></RadioButtonGroup>
           <label>RangeInput</label>
          <RangeInput color={[
            {value:30, color:'#FF0000',opacity:0.5},
            {value:70, color:{ light: 'accent-3', dark: 'brand' }},
            {value:100, color:'#00FF00'},
          ]} value={value} onChange={onChange} />

          <Select options={['small','medium','large']} placeholder="Select One Option "/>
          <label>TextArea</label>
          <TextArea placeholder='Type here...'/>
          <Box align='center' justify='center' pad='small'>
            <Heading level='3'>Data Table</Heading> 
            <DataTable columns={cloumns} data={Data} />
          </Box>
      </Box>

      <Box background="light-4" gridArea="main">
        <Accordion>
            <AccordionPanel label='Accordion'>
                <Box background='light-4' overflow='auto' height='medium'>
                    <Box height='large' flex='flex'>
                    Venkatesh Prabhu Kasthuri Raja (born 28 July 1983),[3] known professionally as Dhanush, is an Indian actor, producer, director, lyricist and playback singer who predominantly works in Tamil cinema.[4] Starring in 46 films over his career, among Dhanush's awards include 13 SIIMA Awards, nine Vijay Awards, seven Filmfare Awards South, five Vikatan Awards, five Edison Awards, four National Film Awards (two as actor and two as producer), and a Filmfare Award.[5] He has been included in the Forbes India Celebrity 100 list six times, which is based on the earnings of Indian celebrities.[6]
                     <Box align='center' justify='center' pad='large' direction='row'>
                        <label>Favorite Icon</label>
                        <Avatar background='dark-4' >
                          <Favorite color='light-3'/>
                        </Avatar>
                        <Avatar background='dark-2'>DB</Avatar>
                        <Avatar background='brand'>PT</Avatar>
                        <Avatar size="2xl" src={photo} round='small'></Avatar>
                      </Box>
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
            
            <Box direction='row'>
            <Calendar size='small'/>
              <Clock type='analog'/>
              <Clock type='digital' hourLimit='12'/>
              <label>Distribution</label>
              <Distribution values={[
                {value:40,color:'light-1'},
                {value:30,color:'brand'},
                {value:20,color:'dark-2'},
                {value:10,color:'dark-4'}
              ]} >
                {value => (
                  <Box pad="small" background={value.color} fill>
                    <Text size="large">{value.value}</Text>
                  </Box>
                )}
              </Distribution>
            </Box>
        </Box>
        <Card  height="small" width="small" background="light-1">
          <CardHeader pad="medium">Card Header</CardHeader>
          <CardBody pad="medium">Card Body</CardBody>
          <CardFooter  background="dark-1">
            <Button> <Favorite/> </Button>
            <Button><ShareOption/></Button>
          </CardFooter>
        </Card>
        <Box direction='row' pad='small'>
        <DateInput name="value" format="mm/dd/yyyy" />
        </Box>
        <FileInput name='fileInput' id='fileInput' label='File Input'>
              
        </FileInput>
        <label>TextInput</label>
          <TextInput icon={<Search />} reverse placeholder='Search'/>
          <Notification title='Default Status Title' message='It is Example Notification' />
          <Text align='center' justify='center' size='large'>
            NameValuePair
          </Text>
          <NameValueList>
            <NameValuePair name='First Name'>
              <Text color='brand'>Desu</Text>
            </NameValuePair>
            <NameValuePair name='Last Name'>
              <Text color='brand'>Brahma</Text>
            </NameValuePair>
          </NameValueList>
          <Pagination justify='center' align='center' numberItems={200} />
          <Meter type='circle' />
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
