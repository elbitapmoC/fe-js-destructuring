import React from "react";

const Destructuring = () => {
  // Array Destructuring
  const foods = ["🥙", "🍕", "🍱"];
  const drinks = ["🍺", undefined, "🧃", "🧋", "🍵"];
  const [, pizza, sushi] = foods;
  // You can omit variables as well by leaving the space blank.
  const [falafel] = foods;
  // Default value for wine is 🍷, just in case there's an undefined value.
  const [beer, wine = "🍷", ...juices] = drinks;

  // We can also destructure objects.
  const expressions = {
    laughing: "😆",
    innocent: "😇",
    loved: "🥰",
    disguised: "🥸",
    sick: "🤧",
  };
  // Instead of doing expressions.sick it'd be..
  // :haha is the alias for laughing object property.
  const { laughing: haha, loved, disguised } = expressions;

  // Perform a swap.
  let a = "foo";
  let b = "bar";
  [a, b] = [b, a];

  return (
    <div className="text-6xl flex-col justify-between">
      <section className="justify-center flex">
        <span className="mr-8">Suggested foods:</span>
        <aside>
          <span>{falafel}</span>
          <span>{pizza}</span>
          {juices.map((juice) => (
            <span>{juice}</span>
          ))}
        </aside>
      </section>
      <hr />
      <section className="flex justify-between">
        <span className="mr-8">Selected moods:</span>
        <aside className="emojis">
          <span>{loved}</span>
          <span>{disguised}</span>
        </aside>
      </section>
    </div>
  );
};

export default Destructuring;
