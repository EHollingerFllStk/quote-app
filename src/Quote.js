import React from "react";
import { Volume, Copy, BrandTwitter } from 'tabler-icons-react';
import { Paper, Blockquote, Button, Box, Divider, Space, ActionIcon } from "@mantine/core";


export default function Quote(props) {
    const { content, author, getQuote } = props;

    if (!content) {
        return null;
      }

    return (
    <Paper shadow="xs" p="md" style={{ minWidth: "80vw" }}>
        <Blockquote cite={author ? `- ${author}` : "" } >
            {content}
        </Blockquote>
        <Space h="md" />
        <Divider />
        <Space h="md" />
        <Box sx={{
            display: "flex", 
            justifycontent: "space-between"
        }}>
            <Box sx={{ display: "flex"}}>
                <ActionIcon size="lg" variant="outline">
                    <Volume size={24} />
                </ActionIcon>
                <Space w="xs" />
                <ActionIcon size="lg" variant="outline">
                    <Copy size={24} />
                </ActionIcon>
                <Space w="xs" />
                <ActionIcon size="lg" variant="outline">
                    <BrandTwitter size={24} />
                </ActionIcon>
                <Space w="xs" />
            </Box>
            <Button onClick={getQuote}>New Quote</Button>
        </Box>

    </Paper>
  )
}
