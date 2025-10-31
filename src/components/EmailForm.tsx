import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

interface EmailFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailForm = ({ isOpen, onClose }: EmailFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Success! Check your email for instant access.");
    
    // Here you would typically redirect to your affiliate link or checkout page
    // window.location.href = "YOUR_AFFILIATE_LINK_HERE";
    
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Get{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Instant Access
            </span>
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Your Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12"
            />
          </div>
          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Get Instant Access"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            By submitting, you agree to receive emails about His Secret Obsession. 60-day money-back
            guarantee.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailForm;
