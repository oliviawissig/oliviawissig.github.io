"use client";
import React from "react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
	Checkbox,
	Input,
	Link,
    Textarea,
} from "@nextui-org/react";

const ContactMeButton = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Button onPress={onOpen} color="primary">
				Contact Me!
			</Button>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				placement="top-center">
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								Hello! 👋🏼
							</ModalHeader>
							<ModalBody>
								<Input
									autoFocus
									// endContent={
									// 	<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
									// }
									label="Name"
									placeholder="Hi! What's your name?"
									variant="bordered"
								/>
								<Input
									// endContent={
									// 	<LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
									// }
									label="Email"
									placeholder="Enter your email?"
									variant="bordered"
								/>
								<Textarea
									label="Message"
									placeholder="Enter your note here!"
                                    variant="bordered"
								/>
								<div className="flex py-2 px-1 justify-between">
									<Link
										color="primary"
										href="mailto:oliviawissig@gmail.com"
										size="sm">
										Send me an email instead?
									</Link>
								</div>
							</ModalBody>
							<ModalFooter>
								<Button
									color="danger"
									variant="light"
									onPress={onClose}>
									Close
								</Button>
								<Button color="primary" onPress={onClose}>
									Send
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default ContactMeButton;
