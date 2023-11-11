import ResponsiveAppBar from "./ResponsiveAppBar";
import React, { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { CircularProgress } from "@mui/material";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";

import SendIcon from "@mui/icons-material/Send";
import { axiosInstance } from "./AxiosHelper";

// Define a type for the message
type Message = {
  sender: "user" | "bot";
  text: string;
};

export const AiGame = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const handleSendMessage = async (
    event: React.KeyboardEvent | React.FormEvent
  ) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (inputText.trim() !== "") {
      const newMessage: Message = { sender: "user", text: inputText };
      setMessages([...messages, newMessage]);

      const input = inputText;
      setInputText("");
      setIsLoading(true); // Start loading

      try {
        // Make the API call
        const response = await axiosInstance.post("/llm/ai-game-llm/", {
          input_param: input,
        });

        if (response.status === 200) {
          const responseData = await response.data;
          console.log(responseData);
          // Process the API response and add it to the chat
          const botReply: Message = {
            sender: "bot",
            text: responseData.result || "No response from the server.",
          };
          setMessages((prevMessages) => [...prevMessages, botReply]);
        } else {
          // Handle API error
          console.error("API request failed");
        }
      } catch (error) {
        console.error("Error while making the API request:", error);
      } finally {
        setIsLoading(false); // Stop loading regardless of outcome
      }
    }
  };

  return (
    <ResponsiveAppBar>
      <>
        <Box
          sx={{
            backgroundColor: "rgb(244, 246, 248) !important",
            display: "flex",
            flexDirection: "column",
            maxHeight: "calc(100vh - 260px)",
            height: "calc(100vh - 260px)", // Removed the 'max-' prefix and wrapped the value in quotes
            overflowY: "auto", // Ensured the value is in quotes
            paddingBottom: "20px", // Ensured the value is in quotes
            p: 2,
            "::-webkit-scrollbar": {
              width: "10px",
              backgroundColor: "#F5F5F5",
            },
            "::-webkit-scrollbar-track": {
              borderRadius: "10px",
              boxShadow: "inset 0 0 5px grey",
              backgroundColor: "#F5F5F5",
            },
            "::-webkit-scrollbar-thumb": {
              borderRadius: "10px",
              backgroundColor: "#888",
              "&:hover": {
                backgroundColor: "#555",
              },
            },
          }}
        >
          <List>
            {messages.map((message, index) => (
              <ListItem key={index} alignItems="flex-start">
                <ListItemAvatar>
                  {message.sender === "bot" && (
                    <Avatar sx={{ bgcolor: "#000000" }}>
                      <BubbleChartIcon />
                    </Avatar>
                  )}
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Paper
                      elevation={0} // Adjust the elevation for shadow effect
                      sx={{
                        whiteSpace: "pre-wrap",
                        boxShadow: `rgba(3, 3, 3, 0.1) 0px 2px 10px`,
                        backgroundColor:
                          message.sender === "user" ? "#e0e0e0" : "#90f9a1", // Light grey for user, light blue for bot
                        borderRadius: "6px", // Rounded corners for bubble effect
                        padding: "10px", // Padding inside the bubble
                        maxWidth: "75%", // Max width of bubble
                        wordWrap: "break-word", // Prevents long text from overflowing
                        textAlign: message.sender === "user" ? "right" : "left",
                        float: message.sender === "user" ? "right" : "left", // Floats the message to the right if user, to the left if bot
                        clear: "both", // Prevents the floating elements from wrapping around each other
                        position: "relative", // Position relative for the tail effect
                        marginLeft: message.sender === "user" ? "auto" : "10px", // Left margin for user messages
                        marginRight: message.sender === "bot" ? "auto" : "10px", // Needed for the pseudo-elements
                      }}
                    >
                      {message.text}
                    </Paper>
                  }
                />
              </ListItem>
            ))}
          </List>
          {isLoading && (
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress />
            </Box>
          )}
        </Box>
        <Paper
          elevation={4}
          style={{
            position: "fixed",
            bottom: 25,
            width: `calc(100% - 380px)`,
            padding: "20px",
            zIndex: 1000,
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSendMessage} // Use onSubmit for form
          >
            <TextField
              fullWidth
              //   multiline
              size="small"
              label="Type a message..."
              variant="outlined"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <IconButton
              type="submit" // Make this a submit button
              color="primary"
              sx={{ p: "10px" }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      </>
    </ResponsiveAppBar>
  );
};
