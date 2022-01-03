import { SimpleGrid, Box, Text, Link } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import EventCard from '../components/Events&Blogs/EventCard'
import Footer from '../components/Footer';
const IMAGE = './Event1.jpeg';

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
                    marginTop={"90px"}
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
                    <Tab>
                        <Link>Past Events</Link>
                    </Tab>
                    <Tab>Upcoming Events</Tab>
                </TabList>

                <TabPanels margin={'auto'}>
                    <TabPanel>
                        <p>Past Events!</p>
                        <SimpleGrid columns={[1, 2, 3, 3]} spacing={5} mx="auto" my={0} maxW="1500px" paddingTop={'50px'}>
                            <EventCard EventImage={IMAGE} EventName="Info Session" Date="Thursday, September 9 2021" CommunityLink="https://gdsc.community.dev/events/details/developer-student-clubs-pimpri-chinchwad-college-of-engineering-and-research-pune-presents-google-developer-student-clubs-pccoer-information-session/" />
                            <EventCard EventImage={''} EventName="ABC" Date="PQR" CommunityLink="#" />
                            <EventCard EventImage={''} EventName="ABC" Date="PQR" CommunityLink="#"/>
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <p>Upcoming Events!</p>
                        <SimpleGrid columns={[1, 2, 3, 3]} spacing={5} mx="auto" my={0} maxW="1500px">
                            <EventCard EventImage={''} EventName="ABC" Date="PQR" CommunityLink="#"/>
                            <EventCard EventImage={''} EventName="ABC" Date="PQR" CommunityLink="#"/>
                            <EventCard EventImage={''} EventName="ABC" Date="PQR" CommunityLink="#"/>
                        </SimpleGrid>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Footer />
        </div>
    )
}