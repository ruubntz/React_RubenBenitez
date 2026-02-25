function NumInputs({ a, b, onChangeA, onChangeB }) {
  return (
    <div>
      <input
        type="number"
        value={a}
        onChange={(e) => onChangeA(e.target.value)}
        placeholder="A"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => onChangeB(e.target.value)}
        placeholder="B"
      />
    </div>
  );
}

export default NumInputs;