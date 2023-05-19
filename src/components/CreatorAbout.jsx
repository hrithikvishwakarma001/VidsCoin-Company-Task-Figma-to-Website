import { Box, Grid, Image, Text } from "@chakra-ui/react";

const CreatorAbout = () => {
	return (
		<Box>
			<img
				src='\about us\vr.png'
				alt='vector'
				width={"5%"}
				style={{
					position: "absolute",
					right: "61%",
				}}
			/>
			<Text
				style={{
					fontFamily: "Archivo",
					fontStyle: "normal",
					fontWeight: "600",
					fontSize: "45px",
					lineHeight: "57px",
					textAlign: "center",
					color: "#F3F3F5",
					marginBottom: "50px",
				}}>
				<img
					src='\about us\vr.png'
					alt='vector'
					width={"5%"}
					style={{
						position: "absolute",
						right: "33%",
					}}
				/>
				Our Creators
			</Text>

			<Grid
				w={"80%"}
				m={"auto"}
				placeItems={"center"}
				templateColumns={{
					lg: "repeat(3, 1fr)",
				}}>
				<Box>
					<Image src='\about us\creator2.png' />
					<Text
						style={{
							marginTop: "10px",
							marginBottom: "10px",
							paddingLeft: "3rem",
							fontFamily: "Archivo",
							fontStyle: "normal",
							fontWeight: "700",
							fontSize: "40px",
							lineHeight: "44px",
							color: "#E0E0E0",
						}}>
						Nijo Jonson
					</Text>
					<Text
						style={{
							marginTop: "10px",
							marginBottom: "10px",
							paddingLeft: "5rem",
							fontFamily: "Archivo",
							fontStyle: "normal",
							fontWeight: "400",
							fontSize: "20px",
							lineHeight: "26px",
							color: "#E0E0E0",
						}}>
						5m+ followers
					</Text>
				</Box>
				<Box>
					<Image src='\about us\creator2.png' />
					<Text
						style={{
							marginTop: "10px",
							marginBottom: "10px",
							paddingLeft: "3rem",
							fontFamily: "Archivo",
							fontStyle: "normal",
							fontWeight: "700",
							fontSize: "40px",
							lineHeight: "44px",
							color: "#E0E0E0",
						}}>
						Rohit R Gaba
					</Text>
					<Text
						style={{
							marginTop: "10px",
							marginBottom: "10px",
							paddingLeft: "5rem",
							fontFamily: "Archivo",
							fontStyle: "normal",
							fontWeight: "400",
							fontSize: "20px",
							lineHeight: "26px",
							color: "#E0E0E0",
						}}>
						2.5m+ followers
					</Text>
				</Box>
				<Box>
					<Image src='\about us\c3.png' />
					<Text
						style={{
							marginTop: "10px",
							marginBottom: "10px",
							paddingLeft: "3rem",
							fontFamily: "Archivo",
							fontStyle: "normal",
							fontWeight: "700",
							fontSize: "40px",
							lineHeight: "44px",
							color: "#E0E0E0",
						}}>
						Anuj Ramatri
					</Text>
					<Text
						style={{
							marginTop: "10px",
							marginBottom: "10px",
							paddingLeft: "5rem",
							fontFamily: "Archivo",
							fontStyle: "normal",
							fontWeight: "400",
							fontSize: "20px",
							lineHeight: "26px",
							color: "#E0E0E0",
						}}>
						2m+ followers
					</Text>
				</Box>
			</Grid>
			<Grid
        my='10'
				w={{ base: "80%", lg: "50%" }}
				mx={"auto"}
				placeItems={"center"}
				templateColumns={{
					lg: "repeat(2, 1fr)",
				}}>
				<Box>
					<Image src='\about us\creator2.png' />
					<Text
						style={{
							marginTop: "10px",
							marginBottom: "10px",
							paddingLeft: "3rem",
							fontFamily: "Archivo",
							fontStyle: "normal",
							fontWeight: "700",
							fontSize: "40px",
							lineHeight: "44px",
							color: "#E0E0E0",
						}}>
						Rohit R Gaba
					</Text>
					<Text
						style={{
							marginTop: "10px",
							marginBottom: "10px",
							paddingLeft: "5rem",
							fontFamily: "Archivo",
							fontStyle: "normal",
							fontWeight: "400",
							fontSize: "20px",
							lineHeight: "26px",
							color: "#E0E0E0",
						}}>
						2.5m+ followers
					</Text>
				</Box>
				<Box>
					<Image src='\about us\c3.png' />
					<Text
						style={{
							marginTop: "10px",
							marginBottom: "10px",
							paddingLeft: "3rem",
							fontFamily: "Archivo",
							fontStyle: "normal",
							fontWeight: "700",
							fontSize: "40px",
							lineHeight: "44px",
							color: "#E0E0E0",
						}}>
						Anuj Ramatri
					</Text>
					<Text
						style={{
							marginTop: "10px",
							marginBottom: "10px",
							paddingLeft: "5rem",
							fontFamily: "Archivo",
							fontStyle: "normal",
							fontWeight: "400",
							fontSize: "20px",
							lineHeight: "26px",
							color: "#E0E0E0",
						}}>
						2m+ followers
					</Text>
				</Box>
			</Grid>
		</Box>
	);
};

export default CreatorAbout;
