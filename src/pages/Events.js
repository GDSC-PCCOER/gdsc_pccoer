import { SimpleGrid, Box, Text, Link } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import EventCard from '../components/Events&Blogs/EventCard'
import Footer from '../components/Footer';
import IMAGE1 from '../assets/images/Event1.jpeg'
import IMAGE2 from '../assets/images/30 Days of Cloud Info Session.jpeg'
import IMAGE3 from '../assets/images/Android Study Jams Info Session.jpeg'
import IMAGE4 from '../assets/images/Flutter Session.jpeg'
import IMAGE5 from '../assets/images/ML Study Jams Info Session.jpeg'

export default function Events() {
    return (
        <div style={
            {
                overflow: 'hidden'
            }
        }>
            <Box
                w="100%"
                h="200px"
                bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
                pos={'relative'}
            >
                <Text
                    marginTop={"80px"}
                    textAlign={'center'}
                    bgGradient="linear(to-l, #7928CA,#FF0080)"
                    bgClip="text"
                    fontSize={'calc(40px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))'}
                    fontWeight="extrabold"
                    padding={"50px 0"}
                    pos={'relative'}
                >
                    Welcome to Events Page
                </Text>
            </Box>

            <Tabs
                align='center'
                variant="soft-rounded"
                colorScheme="green"
                marginTop={10}
                fontSize={35}
                fontFamily={'sans-serif'}
                paddingBottom={'100px'}
            >
                <TabList>
                    <Tab fontSize={20}>
                        <Link>Past Events</Link>
                    </Tab>
                    <Tab fontSize={20}>
                        <Link>Upcoming Events</Link>
                    </Tab>
                </TabList>

                <TabPanels margin={'auto'}>
                    <TabPanel>
                        <p>Past Events!</p>
                        {/* <SimpleGrid columns={[1, 2, 3, 3]} spacing={5} mx="auto" my={0} maxW="1500px" paddingTop={'50px'}> */}
                        <SimpleGrid columns={[1, 2, 3, 3]} spacing={5} mx="auto" my={0} maxW="1500px" paddingTop={'50px'} paddingLeft={'60px'}>
                            
                            <EventCard EventImage={IMAGE4} EventName="Flutter Festival" Date="Friday, March 4 2022, 7:30 PM (IST)" CommunityLink="https://gdsc.community.dev/events/details/developer-student-clubs-pimpri-chinchwad-college-of-engineering-and-research-pune-presents-flutter-festival-gdsc-pccoer/" BlogLink="/blogs"/>
                            <EventCard EventImage={IMAGE3} EventName="Android Study Jams" Date="Tuesday, November 30 2021, 5:30 PM (IST)" CommunityLink="https://gdsc.community.dev/events/details/developer-student-clubs-pimpri-chinchwad-college-of-engineering-and-research-pune-presents-android-study-jams-session-3/" BlogLink="/blogs"/>
                            <EventCard EventImage={IMAGE2} EventName="30 Days of Google Cloud - Info Session" Date="Wednesday, September 22 2021, 5:15 PM (IST)" CommunityLink="https://gdsc.community.dev/events/details/developer-student-clubs-pimpri-chinchwad-college-of-engineering-and-research-pune-presents-30-days-of-google-cloud-info-session/" BlogLink="/blogs"/>
                            <EventCard EventImage={IMAGE1} EventName="Info Session" Date="Thursday, September 9 2021" CommunityLink="https://gdsc.community.dev/events/details/developer-student-clubs-pimpri-chinchwad-college-of-engineering-and-research-pune-presents-google-developer-student-clubs-pccoer-information-session/" BlogLink="https://medium.com/@sbarke236/lively-info-session-55890419c8ee"/>
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <p>Upcoming Events!</p>
                        <SimpleGrid columns={[1, 2, 3, 3]} spacing={5} mx="auto" my={0} maxW="1500px">
                            <EventCard EventImage={IMAGE5} EventName="ML Study Jams" Date="Thursday, April 28 2022, 9:00 PM (IST)" CommunityLink="https://gdsc.community.dev/events/details/developer-student-clubs-pimpri-chinchwad-college-of-engineering-and-research-pune-presents-ml-study-jams-firebase-for-web-info-session/" BlogLink="/blogs" />
                            {/* <EventCard EventImage={''} EventName="ABC" Date="PQR" CommunityLink="#"/>
                            <EventCard EventImage={''} EventName="ABC" Date="PQR" CommunityLink="#"/> */}
                        </SimpleGrid>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Footer />
        </div>
    )
}
