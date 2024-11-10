import React from 'react';

const Note = () => {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Code Coverage Techniques</h1>

      <section>
        <h2 className="text-xl font-semibold text-indigo-600">1. Statement Coverage</h2>
        <p className="text-gray-700">
          <strong>Definition:</strong> Ensures that every line (or statement) in the code is executed at least once during testing.
        </p>
        <p className="text-gray-700">
          <strong>Goal:</strong> To check that each individual line of code runs without errors.
        </p>
        <div className="bg-gray-100 p-4 rounded-md my-2">
          <pre>
            <code>
              if (x &gt; 0) {"{"} print("Positive"); {"}"} print("Done");
            </code>
          </pre>
        </div>
        <p className="text-gray-700">
          <strong>Example:</strong> Test with a value of <code>x</code> that executes both lines, like <code>x = 1</code>.
        </p>
        <p className="text-gray-700">
          <strong>Limitation:</strong> Doesn’t guarantee all possible outcomes (branches) are tested, such as when <code>x</code> is zero or negative.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-indigo-600">2. Branch Coverage</h2>
        <p className="text-gray-700">
          <strong>Definition:</strong> Checks that every possible decision (true/false outcome) in the code is tested.
        </p>
        <p className="text-gray-700">
          <strong>Goal:</strong> To test all code paths stemming from each decision point, like if-else conditions.
        </p>
        <div className="bg-gray-100 p-4 rounded-md my-2">
          <pre>
            <code>
              if (x &gt; 0) {"{"} print("Positive"); {"}"} else {"{"} print("Non-positive"); {"}"} print("Done");
            </code>
          </pre>
        </div>
        <p className="text-gray-700">
          <strong>Example:</strong> Test cases where <code>x &gt; 0</code> (e.g., <code>x = 1</code>) and <code>x &lt;= 0</code> (e.g., <code>x = -1</code>).
        </p>
        <p className="text-gray-700">
          <strong>Limitation:</strong> Doesn’t guarantee that all execution paths through the code are covered.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-indigo-600">3. Path Coverage</h2>
        <p className="text-gray-700">
          <strong>Definition:</strong> Tests all possible paths from start to finish in a program, including every combination of branches and statements.
        </p>
        <p className="text-gray-700">
          <strong>Goal:</strong> To catch errors in all potential code paths.
        </p>
        <div className="bg-gray-100 p-4 rounded-md my-2">
          <pre>
            <code>
              if (x &gt; 0) {"{"}
              {"\n  "} if (y &gt; 0) {"{"} print("Both positive"); {"}"} else {"{"} print("X positive, Y non-positive"); {"}"}
              {"\n"} else {"{"} print("X non-positive"); {"}"}
            </code>
          </pre>
        </div>
        <p className="text-gray-700">
          <strong>Example:</strong> Test combinations like <code>(x &gt; 0, y &gt; 0)</code>, <code>(x &gt; 0, y &lt;= 0)</code>, and <code>(x &lt;= 0)</code>.
        </p>
        <p className="text-gray-700">
          <strong>Limitation:</strong> The number of paths can grow quickly with complex code, making it challenging to test all paths.
        </p>
      </section>
    </div>
  );
};

export default Note;
