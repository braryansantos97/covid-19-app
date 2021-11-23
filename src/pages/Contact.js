import { Box, Center, Container, Text } from '@chakra-ui/layout';
import React, { useState } from 'react';
import ContactMe from '../components/ContactMe';

export default function Contact(props) {
	return (
		<Container maxW='xl' className="contactPage position-absolute top-50 start-50 translate-middle">
			<Box bg={"#017075"} color={"white"} rounded="xl">
				<Box>
					<Center>
						<Text fontSize="5xl">Contact Me</Text>
					</Center>
				</Box>
				<Box>
					<ContactMe />
				</Box>
			</Box>
		</Container>
	);
}
