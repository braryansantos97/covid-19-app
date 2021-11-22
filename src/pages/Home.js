import { Box, Container, Text } from '@chakra-ui/layout';
import React from 'react';

export default function Home(props) {

	// const element = props.allContries.map((singleContry) => {
	// 	return (
	// 		<h1>{singleContry.contry}</h1>
	// 	);
	// });


	return (
		<Container maxW='xl'>
			<Box p={3} bg={"gray"} w="100%" m="40px 0 15px 0" borderRadius="lg" borderWidth="1px">
                <Text fontSize="4xl" fontFamily="Work sans" color="white">
                    Total Cases
                </Text>
				<Box d="flex">
					<Text>Confirmed: </Text>
					<Text>{` ${props.total[0].confirmed}`}</Text>
				</Box>
				<Box d="flex">
					<Text>Critical: </Text>
					<Text>{` ${props.total[0].critical}`}</Text>
				</Box>
				<Box d="flex">
					<Text>Deaths: </Text>
					<Text>{` ${props.total[0].deaths}`}</Text>
				</Box>
            </Box>

		</Container>
	);
}
