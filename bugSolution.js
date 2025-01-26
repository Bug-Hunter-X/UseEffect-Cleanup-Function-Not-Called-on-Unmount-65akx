```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // This effect runs only once after the initial render
    console.log('Mounted!');
    return () => {
      // Cleanup function runs before the component unmounts
      console.log('Unmounting!');
    };
  }, []);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    };
  }, []);

  if (!isMounted) {
    return null; 
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```