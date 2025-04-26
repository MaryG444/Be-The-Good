
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShoppingCart, Mail, Leaf, Trash } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Be The Good</h1>
        <p className="text-lg max-w-xl mx-auto text-gray-600">
          A space where handmade meets heart—custom vinyl designs, apothecary creations, and good vibes.
        </p>
        <Button className="text-lg px-6 py-2">Shop Now</Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Vinyl Shirts", "Car Decals", "Herbal Salves"].map((title) => (
          <Card key={title} className="rounded-2xl shadow-md">
            <CardContent className="p-4 space-y-2">
              <div className="bg-gray-200 h-40 rounded-xl" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-500 text-sm">
                Beautiful, handmade, and customizable.
              </p>
              <Button size="sm" variant="outline">
                View More
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Shop All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Custom Shirts", "Decals", "Wood Signs", "Lip Balm", "Salves", "Soaps"].map((item) => (
            <Card key={item} className="rounded-2xl shadow-md">
              <CardContent className="p-4 space-y-2">
                <div className="bg-gray-100 h-40 rounded-xl" />
                <h3 className="text-lg font-semibold">{item}</h3>
                <p className="text-sm text-gray-500">Handcrafted with love.</p>
                <Button size="sm" variant="ghost" className="text-indigo-600" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <ShoppingCart className="text-indigo-600" /> Shopping Cart
        </h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center p-3 bg-gray-100 rounded-xl">
                <span>{item}</span>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => handleRemoveFromCart(index)}
                  className="text-red-500"
                >
                  <Trash size={16} />
                </Button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="space-y-4 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold">Custom Order Request</h2>
        <Input placeholder="Your Name" className="rounded-xl" />
        <Input placeholder="Email Address" className="rounded-xl" />
        <Textarea placeholder="Describe your idea..." className="rounded-xl" rows={4} />
        <Button className="flex gap-2"><Mail size={16} /> Submit Request</Button>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Leaf className="text-green-600" /> Apothecary Goods
        </h2>
        <p className="text-gray-600 max-w-2xl">
          Small-batch wellness goods made with natural ingredients and intention.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Lavender Salve", "Calendula Lip Balm", "Charcoal Soap"].map((product) => (
            <Card key={product} className="rounded-2xl shadow-md">
              <CardContent className="p-4 space-y-2">
                <div className="bg-green-100 h-40 rounded-xl" />
                <h3 className="text-lg font-semibold">{product}</h3>
                <p className="text-sm text-gray-500">All-natural, handmade care.</p>
                <Button size="sm" variant="ghost" className="text-green-600">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-2xl text-center">
        <h3 className="text-xl font-semibold">Stay in the Loop</h3>
        <p className="text-sm text-gray-500 mb-4">Get updates on new creations & special offers.</p>
        <div className="flex gap-2 justify-center">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="max-w-xs rounded-xl"
          />
          <Button className="rounded-xl">Subscribe</Button>
        </div>
      </section>
    </div>
  );
}
