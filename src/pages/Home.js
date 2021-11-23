import { Box, Center, Container, HStack, Text } from '@chakra-ui/layout';
import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default function Home(props) {

	// const element = props.allContries.map((singleContry) => {
	// 	return (
	// 		<h1>{singleContry.contry}</h1>
	// 	);
	// });


	return (
		<Container maxW='xl'>
			<Box p={3} bg={"gray"} w="100%" m="40px 0 15px 0" borderRadius="lg" borderWidth="1px" rounded="md">
				<Center>
					<Text fontSize="4xl" fontFamily="Work sans" color="white">
						Total Cases
					</Text>
				</Center>
					<Box d="flex">
						<Text>Confirmed: </Text>
					</Box>
					<Box d="flex">
						<Text>Critical: </Text>
					</Box>
					<Box d="flex">
						<Text>Deaths: </Text>
					</Box>
            </Box>
			<HStack>
				<Box w="50%" bg={"#017075"} color={"white"} rounded="xl">
					<DayPicker />
				</Box>
				<Box bg={""} w="50%">
					<Box></Box>
				</Box>
			</HStack>

		</Container>
	);
}
