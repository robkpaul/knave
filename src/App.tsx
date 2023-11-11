import './App.css'


let descriptors: string[] = ["Foul", "Putrid", "Foolish", "Dull", "Arrogant", "Stubborn", "Vain", "Weak", "Gullible", "Impolite", "Awful", "Brash", "Brainless", "Dismal", "Decrepit", "Disgusting", "Extraneous", "Fetid", "Fretful", "Ghastly", "Glum", "Greedy", "Grotesque", "Haggard", "Hideous", "Horrific", "Ill", "Inane", "Impure", "Insipid", "Negligent", "Odd", "Rude", "Squalid", "Vacuous"]

let traits = new Map<string, string[]>()
traits.set("Physique", ["Athletic", "Brawny", "Corpulent", "Delicate", "Gaunt", "Hulking", "Lanky", "Ripped", "Rugged", "Scrawny", "Short", "Sinewy", "Slender", "Flabby", "Statuesque", "Stout", "Tiny", "Towering", "Willowy", "Wiry"])
traits.set("Face", ["Bloated", "Blunt", "Bony", "Chiseled", "Delicate", "Elongated", "Patrician", "Pinched", "Hawkish", "Broken", "Impish", "Narrow", "Ratlike", "Round", "Sunken", "Sharp", "Soft", "Square", "Wide", "Wolfish"])
traits.set("Skin", ["Battle Scar", "Birthmark", "Burn Scar", "Dark", "Makeup", "Oily", "Pale", "Perfect", "Pierced", "Pockmarked", "Reeking", "Tattooed", "Rosy", "Rough", "Sallow", "Sunburned", "Tanned", "War Paint", "Weathered", "Whip Scar"])
traits.set("Hair", ["Bald", "Wispy", "Braided", "Bristly", "Cropped", "Curly", "Disheveled", "Dreadlocks", "Filthy", "Frizzy", "Greased", "Limp", "Long", "Luxurious", "Mohawk", "Oily", "Ponytail", "Silky", "Topknot", "Wavy", "Wispy"])
traits.set("Clothing", ["Antique", "Bloody", "Ceremonial", "Decorated", "Eccentric", "Elegant", "Fashionable", "Filthy", "Flamboyant", "Stained", "Foreign", "Frayed", "Frumpy", "Livery", "Oversized", "Patched", "Perfumed", "Rancid", "Torn", "Undersized"])
traits.set("Virtue", ["Ambitious", "Cautious", "Courageous", "Courteous", "Curious", "Disciplined", "Focused", "Generous", "Gregarious", "Honest", "Honorable", "Humble", "Idealistic", "Just", "Loyal", "Merciful", "Righteous", "Serene", "Stoic", "Tolerant"])
traits.set("Vice", ["Aggressive", "Arrogant", "Bitter", "Cowardly", "Cruel", "Deceitful", "Flippant", "Gluttonous", "Greedy", "Irascible", "Lazy", "Nervous", "Prejudiced", "Reckless", "Rude", "Suspicious", "Vain", "Vengeful", "Wasteful", "Whiny"])
traits.set("Speech", ["Blunt", "Booming", "Breathy", "Cryptic", "Drawling", "Droning", "Flowery", "Formal", "Gravelly", "Hoarse", "Mumbling", "Precise", "Quaint", "Rambling", "Rapid-fire", "Dialect", "Slow", "Squeaky", "Stuttering", "Whispery"])
traits.set("Background", ["Alchemist", "Beggar", "Butcher", "Burglar", "Charlatan", "Cleric", "Cook", "Cultist", "Gambler", "Herbalist", "Magician", "Mariner", "Mercenary", "Merchant", "Outlaw", "Performer", "Pickpocket", "Smuggler", "Student", "Tracker"])
traits.set("Misfortune", ["Abandoned", "Addicted", "Blackmailed", "Condemned", "Cursed", "Defrauded", "Demoted", "Discredited", "Disowned", "Exiled", "Framed", "Haunted", "Kidnapped", "Mutilated", "Poor", "Pursued", "Rejected", "Replaced", "Robbed", "Suspected"])
traits.set("Alignment", ["Law", "Law", "Law", "Law", "Law", "Chaos", "Chaos", "Chaos", "Chaos", "Chaos", "Neutrality", "Neutrality", "Neutrality", "Neutrality", "Neutrality", "Neutrality", "Neutrality", "Neutrality", "Neutrality", "Neutrality"])

const traitsMapped = [...traits.entries()].map(
  ([trait, value]) => {
    return <div key={trait} className="value">{trait}: {value[Math.floor(Math.random() * value.length)]}</div>;
  }
);

let startingGear = new Map<string, string[]>()
startingGear.set("Armor", ["No armor", "No armor", "No armor", "Gambeson", "Gambeson", "Gambeson", "Gambeson", "Gambeson", "Gambeson", "Gambeson", "Gambeson", "Gambeson", "Gambeson", "Brigandine", "Brigandine", "Brigandine", "Brigandine", "Chain"])
startingGear.set("Helmets and Shields", ["None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "Helmet", "Helmet", "Helmet", "Shield", "Shield", "Shield", "Helmet and Shield"])
startingGear.set("Dungeoneering Gear", ["Rope, 50ft", "Pulleys", "Candles, 5", "Chain, 10ft", "Chalk, 10", "Crowbar", "Tinderbox", "Grap. hook", "Hammer", "Waterskin", "Lantern", "Lamp oil", "Padlock", "Manacles", "Mirror", "Pole, 10ft", "Sack", "Tent", "Spikes, 5", "Torches, 5"])
startingGear.set("General Gear 1", ["Air bladder", "Bear trap", "Shovel", "Bellows", "Grease", "Saw", "Bucket", "Caltrops", "Chisel", "Drill", "Fish. rod", "Marbles", "Glue", "Pick", "Hourglass", "Net", "Tongs", "Lockpicks", "Metal file", "Nails"])
startingGear.set("General Gear 2", ["Incense", "Sponge", "Lens", "Perfume", "Horn", "Bottle", "Soap", "Spyglass", "Tar pot", "Twine", "Fake jewels", "Blank book", "Card deck", "Dice set", "Cook pots", "Face paint", "Whistle", "Instrument", "Quill & Ink", "Small bell"])

const gearMapped = [...startingGear.entries()].map(
  ([slot, value]) => {
    if (slot == "Dungeoneering Gear") {
      return <>
        <div key={slot}>{slot}: {value[Math.floor(Math.random() * value.length)]}</div>
        <div key={slot}>{slot}: {value[Math.floor(Math.random() * value.length)]}</div>
      </>;
    }
    return <div key={slot} className="value">{slot}: {value[Math.floor(Math.random() * value.length)]}</div>;
  }
);

const attributes: string[] = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]

const attributesMapped = attributes.map((attr) => {
  return <div key={attr} className="value">{attr}:  {Math.min(...[Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)])}</div>
});

function App() {
  return (
    <>
      <h1>Some <span className="fancy">{descriptors[Math.floor(Math.random() * descriptors.length)]}</span> Knave</h1>
      <div>HP: {Math.ceil(Math.random() * 8)}</div>
      <div className="row">
        <div id="attributes" className="col">
          <h2>Attributes</h2>
          {attributesMapped}
        </div>
        <div id="traits" className="col">
          <h2>Traits</h2>
          {traitsMapped}
        </div>
        <div id="gear" className="col">
          <h2>Gear</h2>
          {gearMapped}
        </div>
      </div>
    </>
  )
}

export default App
