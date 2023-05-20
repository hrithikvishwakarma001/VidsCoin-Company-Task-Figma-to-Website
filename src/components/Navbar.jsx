import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	useDisclosure,
	HStack,
	Circle,
	Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
export default function Navbar() {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box>
			<Flex
				bg='root.black'
				color='root.white'
				minH={"60px"}
				py={{ base: 2 }}
				px={{ base: 6, md: 6, lg: 10 }}
				// border={"1px solid red"}
				align={"center"}
				justify={"space-between"}>
				<Flex
					// flex={{ base: 1 }}
					justify={{ base: "center", md: "start" }}>
					{isOpen ? (
						<Button
							fontSize={"sm"}
							fontWeight={400}
							px={4}
							bg='root.white'
							color={"root.black"}
							border={"1px solid black"}
							display='inline-flex'
							letterSpacing={".1rem"}
							mt='2'
							rounded={false}
							boxShadow='3px 3px 0px #09b7ae'
							position='relative'
							_active={{ boxShadow: "none" }}>
							Login or Register
						</Button>
					) : (
						<Image
							src='/logo.png'
							alt='logo'
							width={{ base: "88px", md: "120px" }}
							mt='2'
						/>
					)}
				</Flex>

				<Stack
					flex={{ base: 0, md: 0, lg: 0.5 }}
					justify={"space-between"}
					direction={"row"}
					spacing={6}
					// border={"1px solid red"}
				>
					<Flex display={{ base: "none", md: "flex" }} ml={10}>
						<DesktopNav />
					</Flex>
					<Button
						fontSize={"sm"}
						fontWeight={400}
						px={4}
						bg='root.white'
						color={"root.black"}
						border={"1px solid black"}
						display={{ base: "none", md: "inline-flex" }}
						rounded={false}
						boxShadow='3px 3px 0px #09b7ae'
						position='relative'
						_active={{ boxShadow: "none" }}>
						Login or Register
					</Button>
					<IconButton
						onClick={onToggle}
						display={{ base: "inline-flex", md: "none" }}
						icon={
							isOpen ? (
								<CloseIcon w={3} h={3} />
							) : (
								<HamburgerIcon w={5} h={5} />
							)
						}
						variant={"ghost"}
						aria-label={"Toggle Navigation"}
					/>
				</Stack>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav onToggle={() => onToggle()} />
			</Collapse>
		</Box>
	);
}

const DesktopNav = () => {
	// const location = useLocation();
	// const pathName = location.pathname.substring(1);
	return (
		<Stack
			direction={"row"}
			spacing={8}
			align={"center"}
			// border={"1px solid red"}
			ml={20}>
			{NAV_ITEMS.map((navItem) => (
				<Box
					key={navItem.label}
					// borderBottom={pathName === navItem.label.toLowerCase() ? '1px solid red' : 'none'}
					// borderBottomColor={'root.pink'}
					// borderBottomWidth={2}
				>
					<Link
						p={2}
						to={navItem.href || "#"}
						fontSize={"sm"}
						fontWeight={500}>
						{navItem.label}
					</Link>
				</Box>
			))}
		</Stack>
	);
};

const MobileNav = ({ onToggle }) => {
	const icons = [
		{
			icon: <FiInstagram size={18} />,
		},
		{
			icon: <BsYoutube size={18} />,
		},
		{
			icon: <FaFacebook size={18} />,
		},
		{
			icon: <SiTwitter size={18} />,
		},
	];
	return (
		<Stack p={4} display={{ md: "none" }} h='100vh'>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem
					key={navItem.label}
					{...navItem}
					onToggle={onToggle}
				/>
			))}
			<Box>
				<Text color='#CCCDC7' opacity='0.35' mb='5' mt='5rem'>
					Reach us
				</Text>
				<HStack spacing={{ base: "30px", md: "20px" }}>
					{icons.map((icon, index) => (
						<Circle
							key={index}
							size={{ base: "28px", md: "40px" }}
							bg='#CCCDC7'
							transition='all 0.2s'
							cursor='pointer'
							display='flex'
							boxShadow={"3px 3px 0 rgb(0, 0, 0)"}
							color='root.black'>
							{icon.icon}
						</Circle>
					))}
				</HStack>
			</Box>
		</Stack>
	);
};

const MobileNavItem = ({ label, href, onToggle }) => {
	return (
		<Stack spacing={"5rem"}>
			<Flex
				borderBottom={".5px solid rgba(224, 224, 224, .50)"}
				as={Link}
				justify={"space-between"}
				align={"center"}
				_hover={{
					textDecoration: "none",
				}}
				py='5'>
				<Link to={href || "#"} onClick={onToggle}>
					<Text fontWeight={600} color={"#E0E0E0"}>
						{label}
					</Text>
				</Link>
			</Flex>
		</Stack>
	);
};

const NAV_ITEMS = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "About Us",
		href: "/about",
	},
	{
		label: "Creators",
		href: "/creators",
	},
	{
		label: "Blog",
		href: "/blog",
	},
	{
		label: "FAQ",
		href: "/faq",
	},
];
