import './App.css'


let traits = new Map<string, string[]>()
traits.set("Physique", ["Athletic", "Brawny", "Corpulent", "Delicate", "Gaunt", "Hulking", "Lanky", "Ripped", "Rugged", "Scrawny", "Short", "Sinewy", "Slender", "Flabby", "Statuesque", "Stout", "Tiny", "Towering", "Willowy", "Wiry"])
traits.set("Face", ["Bloated", "Blunt", "Bony", "Chiseled", "Delicate", "Elongated", "Patrician", "Pinched", "Hawkish", "Broken", "Impish", "Narrow", "Ratlike", "Round", "Sunken", "Sharp", "Soft", "Square", "Wide", "Wolfish"])
traits.set("Skin", ["Battle Scar", "Birthmark", "Burn Scar", "Dark", "Makeup", "Oily", "Pale", "Perfect", "Pierced", "Pockmarked", "Reeking", "Tattooed", "Rosy", "Rough", "Sallow", "Sunburned", "Tanned", "War Paint", "Weathered", "Whip Scar"])
traits.set("Hair", ["BaldWispy", "Braided", "Bristly", "Cropped", "Curly", "Disheveled", "Dreadlocks", "Filthy", "Frizzy", "Greased", "Limp", "Long", "Luxurious", "Mohawk", "Oily", "Ponytail", "Silky", "Topknot", "Wavy", "Wispy"])
traits.set("Clothing", ["Antique", "Bloody", "Ceremonial", "Decorated", "Eccentric", "Elegant", "Fashionable", "Filthy", "Flamboyant", "Stained", "Foreign", "Frayed", "Frumpy", "Livery", "Oversized", "Patched", "Perfumed", "Rancid", "Torn", "Undersized"])
traits.set("Virtue", ["Ambitious", "Cautious", "Courageous", "Courteous", "Curious", "Disciplined", "Focused", "Generous", "Gregarious", "Honest", "Honorable", "Humble", "Idealistic", "Just", "Loyal", "Merciful", "Righteous", "Serene", "Stoic", "Tolerant"])
traits.set("Vice", ["Aggressive", "Arrogant", "Bitter", "Cowardly", "Cruel", "Deceitful", "Flippant", "Gluttonous", "Greedy", "Irascible", "Lazy", "Nervous", "Prejudiced", "Reckless", "Rude", "Suspicious", "Vain", "Vengeful", "Wasteful", "Whiny"])
traits.set("Speech", ["Blunt", "Booming", "Breathy", "Cryptic", "Drawling", "Droning", "Flowery", "Formal", "Gravelly", "Hoarse", "Mumbling", "Precise", "Quaint", "Rambling", "Rapid-fire", "Dialect", "Slow", "Squeaky", "Stuttering", "Whispery"])
traits.set("Background", ["Alchemist", "Beggar", "Butcher", "Burglar", "Charlatan", "Cleric", "Cook", "Cultist", "Gambler", "Herbalist", "Magician", "Mariner", "Mercenary", "Merchant", "Outlaw", "Performer", "Pickpocket", "Smuggler", "Student", "Tracker"])
traits.set("Misfortune", ["Abandoned", "Addicted", "Blackmailed", "Condemned", "Cursed", "Defrauded", "Demoted", "Discredited", "Disowned", "Exiled", "Framed", "Haunted", "Kidnapped", "Mutilated", "Poor", "Pursued", "Rejected", "Replaced", "Robbed", "Suspected"])
traits.set("Alignment", ["Law", "Law", "Law", "Law", "Law", "Chaos", "Chaos", "Chaos", "Chaos", "Chaos", "Neutrality", "Neutrality", "Neutrality", "Neutrality", "Neutrality", "Neutrality", "Neutrality", "Neutrality", "Neutrality", "Neutrality"])

const traitsMapped = [...traits.entries()].map(
  ([trait, value]) => {
    return <div key={trait}>{trait}: {value[Math.floor(Math.random() * value.length)]}</div>;
  }
);

function App() {
  return (
    <>
      <h1>Some Knave</h1>
      <div id="traits">
        {traitsMapped}
      </div>
    </>
  )
}

export default App
