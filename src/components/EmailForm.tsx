import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import productImage from "@/assets/product-image.png";

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

    try {
      // Send welcome email via edge function
      await fetch('/api/send-welcome-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      toast.success("Success! Check your email and redirecting to checkout...");
      
      // Redirect to ClickBank payment page
      setTimeout(() => {
        window.location.href = "https://orders.clickbank.net/?cbfid=55390&cbitems=62&corid=53be8584-1ef1-4c5e-bcfe-d70dc034d8be&exitoffer=1105&oaref=01.89576444810781095BAEF7E8C8354654F3D360B7E6A16DCA63ADF5A233D2F859304822A0&template=17913&time=1762269420&vtid=lp0video1text&vvvv=hissecret&vvar=cbexit%3D1105%26cbfid%3D55390%26cbitems%3D62%26cbskin%3D17913%26vtid%3Dlp0video1text";
      }, 1500);
    } catch (error) {
      console.error('Error:', error);
      toast.error("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Get{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Instant Access
            </span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex justify-center my-4">
          <img 
            src={productImage} 
            alt="His Secret Obsession complete program - book and audio CD with 76% off discount" 
            className="w-full max-w-sm h-auto"
          />
        </div>

        <div className="text-center space-y-2 mb-4">
          <p className="text-sm text-muted-foreground">Complete Program + All Bonuses</p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl text-muted-foreground line-through">$168</span>
            <span className="text-4xl font-bold text-primary">$47</span>
          </div>
          <p className="text-xs text-muted-foreground">One-time payment. Instant digital access. 60-day money-back guarantee.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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
