```javascript
// pages/aboutSolution.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/contact'); // Correct path
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Contact Page</button>
    </div>
  );
}
```