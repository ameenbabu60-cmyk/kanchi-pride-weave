import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Chat() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="flex items-center gap-3 px-4 h-14">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="font-semibold">Customer Support</h1>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
      </header>

      {/* Chat Messages Area */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto pb-20">
        <div className="flex justify-start">
          <div className="bg-muted rounded-lg rounded-tl-none p-3 max-w-[80%]">
            <p className="text-sm">Hello! How can I help you today?</p>
            <span className="text-xs text-muted-foreground mt-1 block">10:30 AM</span>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-primary text-primary-foreground rounded-lg rounded-tr-none p-3 max-w-[80%]">
            <p className="text-sm">Hi! I need help with my order.</p>
            <span className="text-xs opacity-70 mt-1 block">10:31 AM</span>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-muted rounded-lg rounded-tl-none p-3 max-w-[80%]">
            <p className="text-sm">I'd be happy to help! Could you please provide your order number?</p>
            <span className="text-xs text-muted-foreground mt-1 block">10:32 AM</span>
          </div>
        </div>
      </div>

      {/* Sticky Footer with Input */}
      <div className="sticky bottom-0 bg-card border-t border-border p-4 z-50">
        <div className="flex gap-2 items-center">
          <Input
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1"
          />
          <Button
            size="icon"
            onClick={handleSend}
            disabled={!message.trim()}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
