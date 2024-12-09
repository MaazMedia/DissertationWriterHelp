// components/WhatsAppWidget.tsx
"use client"

// Make this a Client Component
import React from "react"
import WhatsAppWidget from "react-whatsapp-chat-widget"

import "react-whatsapp-chat-widget/index.css"

const CustomWhatsAppWidget: React.FC = () => {
  return (
    <WhatsAppWidget
      phoneNo="+447543082041" // Updated phone number
      position="right"
      widgetWidth="300px"
      widgetWidthMobile="260px"
      autoOpen={true}
      autoOpenTimer={5000}
      messageBox={true}
      messageBoxTxt="Hi Maria, how can I assist you today?"
      iconSize="40"
      iconColor="white"
      iconBgColor="green" // Updated to green
      headerIcon="./gril.png"
      headerIconColor="green" // Updated to green
      headerTxtColor="white"
      headerBgColor="green" // Updated to green
      headerTitle="Maria" // Updated name
      headerCaption="Customer Support Help" // Updated caption
      bodyBgColor="#e0f2e9" // Light green for body background
      chatPersonName="Support"
      chatMessage={
        <>
          Hello 👋 <br />
          <br /> How can I assist you today?
        </>
      }
      footerBgColor="#d4edda" // Slightly lighter green
      placeholder="Type a message..."
      btnBgColor="green" // Button background updated to green
      btnTxt="Start Chat" // Updated button text
      btnTxtColor="white"
    />
  )
}

export default CustomWhatsAppWidget
