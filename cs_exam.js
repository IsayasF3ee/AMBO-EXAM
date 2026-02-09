// Exam Data
const exams = {
"Arbaminch":[


  {
    q: "Which one of the following is asynchronous in message communication?",
    options: ["Blocking receive", "Blocking send", "Direct message", "Non-block receive"],
    answer: 3,
    explanation: "Non-blocking receive allows the process to continue without waiting, making it asynchronous."
  },
  {
    q: "What is the purpose of an opcode in an instruction?",
    options: ["It determines the operation to be done", "It holds the next instruction reference", "It holds the destination address of an operand", "It holds the source address of an operand"],
    answer: 0,
    explanation: "Opcode specifies which operation the CPU should perform."
  },
  {
    q: "Which layer uses port number to identify applications?",
    options: ["Transport layer", "Application layer", "Network layer", "Physical layer"],
    answer: 0,
    explanation: "Port numbers are used at the transport layer to identify processes or applications."
  },
  {
    q: "Which asymptotic notation describes average case analysis?",
    options: ["Big-O", "Theta (Θ)", "Big-Omega (Ω)", "Little Omega (ω)"],
    answer: 1,
    explanation: "Theta notation (Θ) represents both upper and lower bounds, often used for average case."
  },
  {
    q: "At which layer of the OSI model are devices such as bridges, switches, and NICs used?",
    options: ["Physical layer", "Network layer", "Data link layer", "Application layer"],
    answer: 2,
    explanation: "Bridges, switches, and NICs operate at the data link layer for frame-level communication."
  },
  {
    q: "A computer expert wants to know the number of processes completed per hour. Which metric is this?",
    options: ["Turnaround time", "System throughput", "Waiting time", "Response time"],
    answer: 1,
    explanation: "System throughput measures the number of processes completed in a given period."
  },
  {
    q: "What will be the output of the JavaScript statement Math.sqrt(36)?",
    options: ["6", "3", "36", "1"],
    answer: 0,
    explanation: "The square root of 36 is 6."
  },
  {
    q: "Which is correct about human role in system administration?",
    options: ["Ethics is not required", "Organizational skills not needed", "Requires patience, understanding, and knowledge", "Skills and confidence not expected"],
    answer: 2,
    explanation: "System administration requires technical knowledge, patience, and organizational skills."
  },
  {
    q: "Which is valid regarding PHP variables?",
    options: ["$test = \"This is 'Computer science'\";", "test = 5;", "$test = 9.5", "$test = \"Computer;"],
    answer: 0,
    explanation: "PHP variables start with $ and can store strings correctly enclosed in quotes."
  },
  {
    q: "Which is NOT correct about POP3 and SMTP?",
    options: ["Both are application layer protocols", "A sender can send email using SMTP", "A sender can receive emails using POP3", "Both are network layer protocols"],
    answer: 3,
    explanation: "POP3 and SMTP operate at the application layer, not network layer."
  },
  {
    q: "A problem occurs when a transaction updates a database item, fails, and another transaction accesses it before restoration. What is this?",
    options: ["Lost update problem", "Incorrect summary problem", "Dirty read", "Temporary read problem"],
    answer: 2,
    explanation: "Dirty read happens when a transaction reads uncommitted changes from another transaction."
  },
  {
    q: "Which quantifier can be used for some portion of the universe?",
    options: ["→", "∃", "∧", "∀"],
    answer: 1,
    explanation: "The existential quantifier ∃ indicates that 'there exists' at least one element."
  },
  {
    q: "Output of Math.floor(5.9) in JavaScript?",
    options: ["9", "5", "11.8", "6"],
    answer: 1,
    explanation: "Math.floor() rounds a number down to the nearest integer."
  },
  {
    q: "Attackers motivated by financial gain and performing sabotage/IP theft are called:",
    options: ["Stealer", "Competitor", "Activist", "Hacktivist"],
    answer: 1,
    explanation: "Competitors may attack rivals for financial advantage or theft of secrets."
  },
  {
    q: "_____ is the whole thing that an agent has observed concerning the environment.",
    options: ["Performance measure", "Knowledge", "Action", "Perception"],
    answer: 3,
    explanation: "Perception is the information an agent obtains from the environment."
  },
  {
    q: "Which phase comes before semantic analysis in compiling?",
    options: ["Syntax analysis", "Code optimization", "Code generation", "Intermediate code generation"],
    answer: 0,
    explanation: "Syntax analysis (parsing) occurs before semantic analysis."
  },
  {
    q: "False statement about universal hashing technique:",
    options: ["Single fixed hash function is better than universal hashing for collisions", "Universal hashing reduces chance of collision", "Hash function selected independently of keys", "Hash function selected randomly for each key"],
    answer: 0,
    explanation: "Using a single fixed hash function is more prone to collisions than universal hashing."
  },
  {
    q: "True about functions in JavaScript:",
    options: ["Function names can contain spaces", "Function names can begin with digits", "Function names are not case-sensitive", "No limit to number of function parameters"],
    answer: 3,
    explanation: "JavaScript functions can have any number of parameters; names cannot contain spaces or start with digits."
  },
  {
    q: "Phase of software development that refers to modifying software for changing requirements:",
    options: ["Validation", "Development", "Specification", "Evolution"],
    answer: 3,
    explanation: "Software evolution modifies existing software to meet new requirements."
  },
  {
    q: "True about pop() operation in Stack:",
    options: ["Inserts new element at bottom", "Removes end/top element", "Returns top element without deleting", "Inserts at middle"],
    answer: 1,
    explanation: "pop() removes and returns the element at the top of the stack."
  },
  {
    q: "False about programming language generations:",
    options: ["Assembly language is machine independent", "Assembly needs translation to machine code", "Machine language can execute without translation", "Fifth generation languages need very powerful hardware"],
    answer: 0,
    explanation: "Assembly language is machine dependent, not independent."
  },
  {
    q: "Responsible for shielding machines from attacks:",
    options: ["Switch", "Firewall", "Router", "Network OS"],
    answer: 1,
    explanation: "Firewalls block unauthorized access and protect networked machines."
  },
  {
    q: "Two-level cache with internal and external caches:",
    options: ["Multilevel cache", "Single-level cache", "Unified cache", "Split cache"],
    answer: 0,
    explanation: "Multilevel cache uses L1 (internal) and L2 (external) caches."
  },
  {
    q: "Patients in a clinic with seriously sick first – which data structure?",
    options: ["Stack", "Priority Queue", "Queue", "Tree"],
    answer: 1,
    explanation: "Priority queues allow higher-priority elements to be processed first."
  },
  {
    q: "False about computer architecture and organization:",
    options: ["Organization lasts as long as architecture", "Architecture can be used across different computer models", "Architecture remains long, organization can change", "Manufacturers offer same architecture but different organization"],
    answer: 0,
    explanation: "Organization can change while architecture remains the same; it does not last as long as architecture."
  },
  {
    q: "Optimization problem on a weighted graph:",
    options: ["Is vertex P reachable from Q", "Find minimum spanning tree", "Traverse all vertices", "Count cycles"],
    answer: 1,
    explanation: "Finding a minimum spanning tree is an optimization problem."
  },
  {
    q: "False about transaction failure:",
    options: ["Catastrophes cause failure", "Disk blocks losing data cause failure", "Concurrency control avoids failure", "Logical errors cause failure"],
    answer: 2,
    explanation: "Concurrency control prevents inconsistent data but does not guarantee prevention of transaction failure."
  },
  {
    q: "False about packet vs circuit switching:",
    options: ["Packet more efficient", "Circuit has dedicated channel", "Packet requires end-to-end connection", "Packets sent in small blocks"],
    answer: 2,
    explanation: "Packet switching does NOT require a dedicated end-to-end connection, unlike circuit switching."
  },
  {
    q: "Not an example of scripting language:",
    options: ["PHP", "Perl", "C++", "Python"],
    answer: 2,
    explanation: "C++ is a compiled language, not a scripting language."
  },
  {
    q: "Node with no parent node in a tree is:",
    options: ["Root node", "Parent node", "Internal node", "External node"],
    answer: 0,
    explanation: "The root node has no parent."
  },
  {
    q: "Network architecture characteristic allowing quick expansion:",
    options: ["Fault tolerance", "Quality of service", "Scalability", "Security"],
    answer: 2,
    explanation: "Scalability allows networks to expand without significant performance degradation."
  },
  {
    q: "Deadlock prevention mechanism that doesn’t require timestamp:",
    options: ["Wound-wait", "Wait-die", "No-wait", "Wait-wait"],
    answer: 2,
    explanation: "No-wait protocol prevents waiting, avoiding the need for timestamps."
  },
  {
    q: "Hardest environment for an agent:",
    options: ["Sequential, non-deterministic, dynamic", "Partially observable, static, continuous", "Fully observable, sequential, deterministic", "Deterministic, fully observable, static"],
    answer: 0,
    explanation: "Sequential, non-deterministic, dynamic environments are hardest because the agent must handle uncertainty and changes."
  },
  {
    q: "Program data independence in DBMS means:",
    options: ["Application may be affected by data changes", "Data and applications are defined separately", "Both program and data defined together", "Programs can create redundant data independently"],
    answer: 1,
    explanation: "Data and applications are defined separately to allow changes in data without affecting programs."
  },
  {
    q: "Output of Java fragment: n=6, m=15, p=3; n-=m; n*=p; System.out.print(n);",
    options: ["-27", "27", "3", "24"],
    answer: 0,
    explanation: "n = 6-15 = -9; then n*-9*3 = -27."
  },
  {
    q: "Time complexity of Quick sort algorithm:",
    options: ["O(n²)", "O(2^n)", "O(n)", "O(n log n)"],
    answer: 3,
    explanation: "Average time complexity of Quick sort is O(n log n)."
  },
  {
    q: "Smallest HTML heading tag:",
    options: ["<H3>", "<H1>", "<H4>", "<H6>"],
    answer: 3,
    explanation: "<H6> is the smallest heading tag."
  },
  {
    q: "Software test done by clients to check if system satisfies requirements:",
    options: ["Unit testing", "Integration testing", "System testing", "Acceptance testing"],
    answer: 3,
    explanation: "Acceptance testing is done by clients to validate the system meets requirements."
  },




  {
    q: "Which measure ensures information systems' availability, integrity, authentication, and confidentiality?",
    options: ["Interception", "Information assurance", "Information security", "Wiretapping"],
    answer: 1,
    explanation: "Information assurance focuses on protecting information and information systems."
  },
  {
    q: "Which network type is the largest?",
    options: ["Metropolitan Area Network", "The Internet", "Wide Area Network", "Local Area Network"],
    answer: 1,
    explanation: "The Internet is the largest network globally, connecting multiple WANs and LANs."
  },
  {
    q: "Depth First Traversal algorithm uses which data structure?",
    options: ["Tree", "Priority queue", "Queue", "Stack"],
    answer: 3,
    explanation: "DFS uses a stack (explicit or via recursion) to track the next node to visit."
  },
  {
    q: "Branch that studies whether a problem can be solved regardless of resources?",
    options: ["Automata theory", "Set theory", "Computability theory", "Complexity theory"],
    answer: 2,
    explanation: "Computability theory deals with what can be computed in principle."
  },
  {
    q: "Algorithm to extract Minimum Spanning Tree from a graph:",
    options: ["Huffman encoding", "Prim's algorithm", "Merge sort", "Dijkstra's algorithm"],
    answer: 1,
    explanation: "Prim's algorithm is used to find a minimum spanning tree in weighted graphs."
  },
  {
    q: "University LANs and WANs used by staff and students are best described as:",
    options: ["Metropolitan Area Network", "Local Area Network", "Wide Area Network", "The Internet"],
    answer: 2,
    explanation: "A wide area network (WAN) connects multiple local area networks (LANs) across locations."
  },
  {
    q: "Which is not a single-level ordered index?",
    options: ["Multilevel index", "Primary index", "Clustering index", "Secondary index"],
    answer: 0,
    explanation: "A multilevel index has more than one level, so it is not single-level."
  },
  {
    q: "SQL to delete publisher named 'xWZ' from PUBLISHER table?",
    options: ["DELETE FROM PUBLISHER WHERE Address = 'XWZ'", "DELETE FROM BOOK WHERE Name = 'XWZ'", "DELETE FROM BOOK_AUTHOR WHERE Address = 'xWZ'", "DELETE FROM PUBLISHER WHERE Name = 'XWZ'"],
    answer: 3,
    explanation: "DELETE FROM PUBLISHER WHERE Name='xWZ' correctly removes the row by name."
  },
  {
    q: "Method to obtain meaning of encrypted information without secret key?",
    options: ["Decryption", "Cryptanalysis", "Encryption", "Cryptography"],
    answer: 1,
    explanation: "Cryptanalysis attempts to break encryption without the key."
  },
  {
    q: "Used for syntax analysis in compiling process:",
    options: ["Loader", "Scanner", "Linker", "Parser"],
    answer: 3,
    explanation: "Parser performs syntax analysis by checking grammatical structure of code."
  },
  {
    q: "Program to decode scrambled messages sent by a friend:",
    options: ["Secret key", "Encryption program", "Ciphertext", "Decryption program"],
    answer: 3,
    explanation: "Decryption program converts scrambled text (ciphertext) back to readable form."
  },
  {
    q: "Most secure computer compared to others?",
    options: ["Connected with latest antivirus", "Connected with strong IDS", "Connected with latest firewall", "Not connected to Internet"],
    answer: 3,
    explanation: "A computer not connected to the Internet is least vulnerable to attacks."
  },
  {
    q: "Not true about fan trap in ERD:",
    options: ["Resolved by readjusting model", "Occurs with ambiguous pathway", "Occurs when no pathway exists", "Occurs when multiple 1:N relationships fan out"],
    answer: 2,
    explanation: "Fan trap occurs due to multiple 1:N relationships, not absence of pathway."
  },
  {
    q: "False about arrays in C++:",
    options: ["Collection of similar data objects", "Size must be constant at declaration", "Use [] brackets to access", "Access elements without index"],
    answer: 3,
    explanation: "Array elements cannot be accessed without using index numbers."
  },
  {
    q: "When is DBMS costly and not recommended?",
    options: ["To control redundancy", "Embedded systems with small storage", "Multiple users accessing database", "To deny unauthorized access"],
    answer: 1,
    explanation: "Embedded systems with limited storage may not efficiently support a full DBMS."
  },
  {
    q: "Data update method where modified items are written after transaction ends?",
    options: ["In-place update", "Immediate update", "Shadow update", "Deferred update"],
    answer: 3,
    explanation: "Deferred update writes changes at the end of the transaction or after multiple transactions."
  },
  {
    q: "True about Java and JavaScript:",
    options: ["JavaScript used in sophisticated apps", "JavaScript is compiled and interpreted in source form", "Both are object-oriented", "JavaScript has more features than Java"],
    answer: 2,
    explanation: "Both Java and JavaScript support object-oriented programming concepts."
  },
  {
    q: "Step in problem solving listing actions and states for goal:",
    options: ["Search", "Problem formulation", "Execute", "Goal formulation"],
    answer: 1,
    explanation: "Problem formulation defines the state space and actions to achieve the goal."
  },
  {
    q: "Set of attributes affecting logical execution of a program:",
    options: ["Arrangement", "Architecture", "Organization", "Flow control"],
    answer: 1,
    explanation: "Architecture defines the structure and attributes of a system."
  },
  {
    q: "Turing machine with two tapes, one read-only, one read-write:",
    options: ["Multi-dimensional TM", "Off-line TM", "Non-deterministic TM", "Multi-head TM"],
    answer: 1,
    explanation: "Offline Turing machines have one read-only input tape and one read/write tape."
  },
  {
    q: "Testing modified software to ensure no new errors introduced:",
    options: ["Regression testing", "Dynamic testing", "Beta testing", "Static testing"],
    answer: 0,
    explanation: "Regression testing checks that new changes haven't introduced bugs."
  },
  {
    q: "Does not show non-functional requirements:",
    options: ["Displaying information", "Memory requirement", "Reliability", "Response time"],
    answer: 0,
    explanation: "Displaying information is a functional requirement, not non-functional."
  },
  {
    q: "Access modifier allowing subclass but not non-subclass access in C++:",
    options: ["Private", "Default", "Public", "Protected"],
    answer: 3,
    explanation: "Protected members are accessible in subclasses but not in unrelated classes."
  },
  {
    q: "Register that holds address of next instruction to fetch:",
    options: ["Memory buffer register", "Instruction buffer register", "Memory address register", "Program counter"],
    answer: 3,
    explanation: "Program counter stores the memory address of the next instruction."
  },
  {
    q: "Linked list data structure type:",
    options: ["Dynamic", "Non-linear", "Static", "Fixed size"],
    answer: 0,
    explanation: "Linked lists are dynamic because nodes can be allocated and deallocated at runtime."
  },
  {
    q: "Interface transferring multiple bits simultaneously:",
    options: ["Serial interface", "Parallel interface", "Bus interface", "One line"],
    answer: 1,
    explanation: "Parallel interfaces allow multiple bits to be transferred at once."
  },
  {
    q: "PHP array: $list = array(20,12,23,19,18); Index of value 19?",
    options: ["3", "2", "1", "0"],
    answer: 0,
    explanation: "Arrays are 0-indexed; value 19 is at index 3."
  },
  {
    q: "Final phase of compiling process:",
    options: ["Code optimization", "Code generation", "Semantic analysis", "Intermediate code generation"],
    answer: 1,
    explanation: "Code generation produces the final machine code executable."
  },
  {
    q: "False about threads:",
    options: ["Threads have program counters", "Threads are a group of processes", "Threads have registers for working memory", "Threads are scheduled entities on CPU"],
    answer: 1,
    explanation: "Threads are not groups of processes; they are lightweight units of execution within a process."
  },
  {
    q: "False about project planning stage:",
    options: ["Project planning is one-time task", "Cost estimation done", "Prepare time schedule done", "Risk analysis done"],
    answer: 0,
    explanation: "Project planning is ongoing; it's not a one-time task."
  },
  {
    q: "Variable accessible throughout C++ program:",
    options: ["Static", "Local", "Global", "Automatic"],
    answer: 2,
    explanation: "Global variables can be accessed anywhere in the program."
  },
  {
    q: "Concept referring to extending specialized classes from generalized classes:",
    options: ["Inheritance", "Overriding", "Overloading", "Encapsulation"],
    answer: 0,
    explanation: "Inheritance allows classes to inherit properties and methods from other classes."
  },
  {
    q: "Self-driving car sensors can detect environment but not all aspects. Which environment?",
    options: ["Fully observable", "Discrete", "Partially observable", "Stochastic"],
    answer: 2,
    explanation: "Partially observable environments provide incomplete information to the agent."
  },
  {
    q: "False about resource wait dependencies in question 27's figure:",
    options: ["P0 waits for resource held by P1", "P1 waits for resource held by P2", "P2 cannot execute until P1 finishes", "B cannot execute until P4 finishes"],
    answer: 3,
    explanation: "Assuming the figure, B’s dependency on P4 is incorrect or unrelated."
  },
  {
    q: "Correct way to create String object in Java:",
    options: ["String m = 'Computer Science'", "String m = 'H' 'e' 'l' 'l' 'o'", "String m = new String('Technology')", "String m = new String(\"Exit Exam\")"],
    answer: 3,
    explanation: "String objects in Java can be created using new String(\"...\")."
  },
  {
    q: "True about frames in HTML:",
    options: ["Frames allow parts to remain stationary while others scroll", "All browsers support frames", "Server load not affected by many frames", "Frames are not difficult for search engines"],
    answer: 0,
    explanation: "Frames allow static content in one section while scrolling other sections."
  },
  {
    q: "False about String in Java:",
    options: ["String can be created from char array", "Content can be changed once created", "String literal creation possible", "String is an object"],
    answer: 1,
    explanation: "Strings in Java are immutable; their content cannot be changed once created."
  },
  {
    q: "DBMS component to control locks:",
    options: ["Query Processor", "Lock Manager", "Lock Table", "Query Optimizer"],
    answer: 1,
    explanation: "Lock manager handles concurrency control by managing locks."
  },
  {
    q: "Evaluates degrees of success of an agent:",
    options: ["Action", "Perception", "Performance measure", "Knowledge"],
    answer: 2,
    explanation: "Performance measure evaluates how well an agent achieves its goals."
  },
  {
    q: "Security service to protect information disclosure from unauthorized entities:",
    options: ["Integrity", "Confidentiality", "Availability", "Authentication"],
    answer: 1,
    explanation: "Confidentiality ensures that sensitive information is not disclosed to unauthorized users."
  },




  

  {
    q: "False statement regarding Direct Address Table and Hash Table?",
    options: [
      "Direct Address Table doesn't use hash function",
      "If universe U is very large, Hash table is better",
      "Hash table allocates one slot per key in universe U",
      "One-to-one correspondence exists between keys and slots in Direct Address table"
    ],
    answer: 2,
    explanation: "Hash tables do not allocate one slot for every possible key; they use hashing to map keys to slots."
  },
  {
    q: "Network security issue showing weakness in networks and devices?",
    options: ["Availability", "Vulnerability", "Attack", "Threat"],
    answer: 1,
    explanation: "Vulnerability represents weaknesses that could be exploited by attacks."
  },
  {
    q: "Time complexity of binary search algorithm?",
    options: ["O(1)", "O(n)", "O(n³)", "O(log2n)"],
    answer: 3,
    explanation: "Binary search divides the search space in half each step, giving O(log n) complexity."
  },
  {
    q: "Software requires major architectural changes. Strategy to apply?",
    options: ["Architectural transformation", "Preventative maintenance", "Software reengineering", "Software maintenance"],
    answer: 0,
    explanation: "Architectural transformation involves modifying the system's architecture."
  },
  {
    q: "Variable accessible throughout C++ program scope?",
    options: ["Static", "Local", "Global", "Automatic"],
    answer: 2,
    explanation: "Global variables are accessible anywhere in the program."
  },
  {
    q: "Correct way to create String object in Java?",
    options: [
      "String m = 'Computer Science'",
      "String m = 'H' 'e' 'l' 'l' 'o'",
      "String m = new String('Technology')",
      "String m = new String(\"Exit Exam\")"
    ],
    answer: 3,
    explanation: "Java String objects can be created using new String(\"...\")."
  },
  {
    q: "Command to check if a computer upstairs is connected to network?",
    options: ["Traceroute", "Ping", "DHCP Discover", "Nslookup"],
    answer: 1,
    explanation: "Ping sends ICMP requests to check connectivity of a host on the network."
  },
  {
    q: "Which element is NOT part of the language L generated from Grammar G (S→aSb, S→ε)?",
    options: ["a", "aabb", "ab", "ε"],
    answer: 0,
    explanation: "Single 'a' cannot be generated; the language requires balanced 'a's and 'b's or empty string."
  },
  {
    q: "Algorithm to reduce size of large data files?",
    options: ["Merge sort", "Heap sort", "Prim's algorithm", "Huffman encoding"],
    answer: 3,
    explanation: "Huffman encoding is a compression algorithm that reduces file size by encoding frequent symbols with fewer bits."
  },
  {
    q: "Asymptotic notation describing worst case analysis?",
    options: ["f(n) little-oh", "f(n) little-omega", "f(n) theta", "f(n) big-omega"],
    answer: 3,
    explanation: "Big-Omega (Ω) is commonly used for best-case; Big-O (O) is for worst-case, but in this context Big-Omega can represent lower bounds; careful interpretation needed."
  },
  {
    q: "Different from others based on role in network?",
    options: ["Wireless access point", "Network printer", "Routers", "Hubs"],
    answer: 1,
    explanation: "A network printer is an end device, others manage network traffic."
  },
  {
    q: "Wrongly coupled generation of operating system and advancement?",
    options: [
      "Fourth generation -> Real time systems",
      "First generation -> Single user",
      "Second generation -> Multiprogramming",
      "Third generation -> Batch system"
    ],
    answer: 3,
    explanation: "Third generation OS were multiprogramming, batch systems were earlier (first or second generation)."
  },
  {
    q: "Best description of a Database Management System (DBMS)?",
    options: [
      "Helps manage computer's activity",
      "Assists process images",
      "Creates and maintains a database",
      "Processes documents"
    ],
    answer: 2,
    explanation: "A DBMS manages and organizes databases for efficient access and control."
  },
  {
    q: "Process terminated due to reference to non-existing memory is called?",
    options: ["Fatal exit", "Normal exit", "Error exit", "Terminated by another process"],
    answer: 0,
    explanation: "Fatal exit occurs when a process accesses invalid memory, causing termination."
  },
  {
    q: "Two transactions interleaved causing incorrect database value is?",
    options: ["Dirty read", "Lost update", "Temporary read", "Incorrect summary"],
    answer: 1,
    explanation: "Lost update occurs when concurrent transactions overwrite each other's updates."
  },
  {
    q: "Question 96 – placeholder (needs content)",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 0,
    explanation: "No specific question content provided for 96."
  },
  {
    q: "Question 97 – placeholder (needs content)",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 0,
    explanation: "No specific question content provided for 97."
  },
  {
    q: "Question 98 – placeholder (needs content)",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 0,
    explanation: "No specific question content provided for 98."
  },
  {
    q: "Question 99 – placeholder (needs content)",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 0,
    explanation: "No specific question content provided for 99."
  },
  {
    q: "Question 100 – placeholder (needs content)",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 0,
    explanation: "No specific question content provided for 100."
  },
  {
    q: "Question 101 – placeholder (needs content)",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 0,
    explanation: "No specific question content provided for 101."
  }








  
  
],






  
"exit exam":[

  {
    q: "Which one of the following is a step in problem solving that lists the actions and states that the agent has to consider provided a goal?",
    options: ["Goal formulation", "Search", "Problem formulation", "Execute"],
    answer: 2,
    explanation: "Problem formulation defines the state space, initial state, actions, and goal state for an agent to solve a problem."
  },
  {
    q: "A process is terminated by the operating system due to a reference to non-existing memory. Which one of the following best explains the process termination?",
    options: ["Normal exit", "Terminated by another process", "Fatal exit", "Error exit"],
    answer: 3,
    explanation: "Error exit occurs when a process encounters an error such as referencing non-existing memory."
  },
  {
    q: "What is the output of the following C++ fragment code? int a, b; a = 13; b = 9; while((20 && 0) && (a > b)) { cout << \"Plants are our life\"; }",
    options: [
      "It displays message 'Plants are our life' infinitely",
      "It displays message 'Plants are Our Life' 4 times",
      "No message will be displayed",
      "It displays message 'Plants are our life' 20 times"
    ],
    answer: 2,
    explanation: "The condition (20 && 0) evaluates to false (0), so the loop body is never executed."
  },
  {
    q: "Which one of the following is not correct about POP3 and SMTP?",
    options: [
      "Both are application layer protocols",
      "A sender can receive emails using POP3",
      "Both are network layer protocols",
      "A sender can send email using SMTP"
    ],
    answer: 2,
    explanation: "POP3 and SMTP are application layer protocols, not network layer protocols."
  },
  {
    q: "Size of large data files can be reduced to save storage disk space. Which algorithm is appropriate to reduce size of large files?",
    options: ["Heap sort algorithm", "Huffman encoding algorithm", "Prim's algorithm", "Merge sort algorithm"],
    answer: 1,
    explanation: "Huffman encoding algorithm is a compression technique used to reduce file size efficiently."
  },
  {
    q: "Advancement of operating system is closely tied to computer architectures. Which one of the following generation and advancement is wrongly coupled?",
    options: [
      "First generation -> single user",
      "Third generation -> batch system",
      "Second generation -> multiprogramming",
      "Fourth generation -> real time systems"
    ],
    answer: 1,
    explanation: "Third generation OSs were multi-programmed systems, not batch systems; batch systems were typical of the second generation."
  },
  {
    q: "Given input Alphabet = {a, b, c, d} and empty string X. Then, which one of the following is true about *?",
    options: ["* = + U {X}", "Σ* = Σ+ ∪ Σ² ∪ Σ³ ∪ Σ⁴", "Σ* = {^}", "Σ* = Σ+"],
    answer: 0,
    explanation: "The Kleene star (*) represents zero or more occurrences of symbols from Σ. It includes the empty string."
  },
  {
    q: "Which one of the following lists of environments is the hardest for an agent?",
    options: [
      "Deterministic, fully observable, static",
      "Sequential, non-deterministic, dynamic",
      "Fully observable, sequential, deterministic",
      "Partially observable, static, continuous"
    ],
    answer: 1,
    explanation: "Sequential, non-deterministic, dynamic environments are the hardest because the agent must deal with uncertainty, sequence of actions, and changing states."
  },
  {
    q: "Which one of the following registers holds the address of the next pair of instructions to be fetched from memory?",
    options: ["Instruction buffer register", "Memory address register", "Program counter", "Memory buffer register"],
    answer: 2,
    explanation: "The Program Counter (PC) holds the memory address of the next instruction to be executed."
  },
  {
    q: "Linked list data structure is type of data structure.",
    options: ["Dynamic data structure", "Non-linear data structure", "Static data structure", "Fixed size data structure"],
    answer: 0,
    explanation: "Linked lists are dynamic data structures because their size can grow or shrink during runtime."
  },
  {
    q: "Which phase of compiling process is considered as the final phase in the process?",
    options: ["Code optimization", "Semantic analysis", "Code generation", "Intermediate code generation"],
    answer: 2,
    explanation: "Code generation is the final phase of compilation, producing machine or intermediate code."
  },
  {
    q: "Which one of the following computers can be most secured compared to the rest?",
    options: [
      "A computer connected to the Internet having strong intrusion detection",
      "A computer connected to the Internet and the latest anti-virus installed on it",
      "A computer connected to the Internet with the latest firewall system",
      "A computer that is not connected to the Internet"
    ],
    answer: 3,
    explanation: "A computer not connected to the Internet is physically isolated and therefore most secure."
  },
  {
    q: "An interface that has multiple lines connecting input/output module and peripheral device and assures multiple bits to be transferred at the same time is:",
    options: ["Parallel interface", "One line interface", "Bus interface", "Serial interface"],
    answer: 0,
    explanation: "A parallel interface transfers multiple bits simultaneously using multiple lines."
  },
  {
    q: "Which one of the following best explains attackers who are motivated by financial gain and perform sabotage, IP theft, and secrets of a rival company?",
    options: ["Activist", "Stealer", "Hacktivist", "Competitor"],
    answer: 3,
    explanation: "Competitor attackers are motivated by business gain and may steal intellectual property or sabotage rivals."
  },
  {
    q: "Which one of the following is responsible for separating some machines from the rest to shield them from possible attacks?",
    options: ["Switch", "Network operating system", "Firewall", "Router"],
    answer: 2,
    explanation: "A firewall acts as a barrier, separating and protecting devices from potential attacks."
  },
  {
    q: "Which one of the following is different from the other based on its role in computer network?",
    options: ["Network printer", "Routers", "Hubs", "Wireless access point"],
    answer: 0,
    explanation: "Network printer is an end device, whereas routers, hubs, and wireless access points are networking devices."
  },
  {
    q: "Which statement is false about universal hashing technique?",
    options: [
      "In universal hashing a hash function is selected randomly from set of hash functions for each key",
      "Universal hashing reduces the chance of data collision",
      "In universal hashing a hash function is selected from set of hash functions independent of keys.",
      "Single fixed hash function technique is better than universal hashing technique in terms of collision reduction"
    ],
    answer: 3,
    explanation: "Single fixed hash function is not better; universal hashing reduces collisions by randomly selecting functions."
  },
  {
    q: "What does the program data independence in the database approach entails for?",
    options: [
      "Data and applications are defined separately",
      "Programs can create redundant data independently",
      "Both program and data are defined together",
      "The application may be affected when data changes"
    ],
    answer: 0,
    explanation: "Data independence means data and programs are defined separately; changes in data structure do not affect programs."
  },
  {
    q: "Which asymptotic notation describes average case analysis?",
    options: ["f(n) = Big-Oh", "f(n) = little-omega", "f(n) = Big-Omega", "f(n) = Theta"],
    answer: 3,
    explanation: "Theta notation (Θ) describes the average case and tight bound of an algorithm's complexity."
  },
  {
    q: "Let a Grammar G = ({S}, {a, b}, S, P), where {S} is set of variables, {a, b} is set of terminal symbols, S is start variable and P is set of productions. Then which one of the following is not an element of the language generated from G. Given P: S → aSb | ε",
    options: ["A", "a", "ab", "aabb"],
    answer: 0,
    explanation: "The grammar generates strings with balanced a's and b's (including ε). 'A' is not part of the generated language."
  },




  
  {
    q: "Which concept refers to extending specialized classes from generalized classes in object-oriented programming?",
    options: ["Overriding", "Overloading", "Inheritance", "Data field Encapsulation"],
    answer: 2,
    explanation: "Inheritance allows a class to acquire properties and behaviors from a parent class."
  },
  {
    q: "A computer expert would like to know the number of processes that are completed per hour to assess the performance of a machine. Therefore, which one of the following best describes the expert's assessment?",
    options: ["Waiting time", "Turnaround time", "Response time", "System throughput"],
    answer: 3,
    explanation: "System throughput measures the number of processes completed in a given time period."
  },
  {
    q: "Which one of the following is not a single level ordered index?",
    options: ["Clustering index", "Secondary index", "Primary index", "Multilevel index"],
    answer: 3,
    explanation: "Multilevel index is a multi-level index, not single-level."
  },
  {
    q: "Which one of the following is true about functions in JavaScript?",
    options: [
      "Function names can begin with digits",
      "There is no limit to the number of function parameters that a function may contain",
      "Function names are not case-sensitive",
      "Function names can contain spaces"
    ],
    answer: 1,
    explanation: "JavaScript functions can have any number of parameters."
  },
  {
    q: "What is the purpose of an opcode that is as indicated in the figure (4 bits opcode, 6 bits operands)?",
    options: [
      "It holds the next instruction reference",
      "It determines the operation to be done",
      "It holds the destination address of an operand",
      "It holds the source address of an operand"
    ],
    answer: 1,
    explanation: "Opcode specifies the operation to be performed by the CPU."
  },
  {
    q: "Which one of the following is not correct for deadlock in the given resource allocation scenario?",
    options: [
      "P0 is waiting for a resource held by P1",
      "P1 is waiting for a resource held by P2",
      "P2 cannot be executed until P1 finishes",
      "P3 cannot be executed until P4 finishes"
    ],
    answer: 2,
    explanation: "P2 may proceed independently if it has resources; the statement incorrectly assumes P2 is blocked."
  },
  {
    q: "What is the output of the following Java fragment code? int n = 6, m = 15, p = 3; n -= m; n *= p; System.out.print(n);",
    options: ["-27", "3", "27", "24"],
    answer: 0,
    explanation: "n -= m → n = 6 - 15 = -9; n *= p → n = -9 * 3 = -27."
  },
  {
    q: "Which one of the following is a measure taken to ensure information and information systems' availability, integrity, authentication and confidentiality?",
    options: ["Information security", "Interception", "Information assurance", "Wiretapping"],
    answer: 0,
    explanation: "Information security encompasses measures to protect confidentiality, integrity, and availability."
  },
  {
    q: "Suppose you have received a message from your friend but the message is scrambled. In order to read the message which program would you use?",
    options: ["Secret key", "Encryption program", "Decryption program", "Ciphertext"],
    answer: 2,
    explanation: "Decryption program is used to convert encrypted messages back into readable form."
  },
  {
    q: "Suppose you have developed a self-driving car equipped with sensors and camera that help it detect traffic. Its sensors are able to detect the environment but not all aspects. Hence, in which environment is your car acting?",
    options: ["Stochastic", "Discrete", "Partially observable", "Fully observable"],
    answer: 2,
    explanation: "The car operates in a partially observable environment because it cannot see all aspects at once."
  },
  {
    q: "is set of attributes that can be seen by a program and can have direct impact on the logical execution of a program.",
    options: ["Organization", "Arrangement", "Architecture", "Flow control"],
    answer: 2,
    explanation: "Computer architecture refers to attributes visible to programmers that affect program execution."
  },
  {
    q: "Look at the following PHP line: $list = array(20, 12, 23, 19, 18); What is the index of data value 19?",
    options: ["0", "3", "1", "2"],
    answer: 1,
    explanation: "Arrays in PHP are zero-indexed: $list[3] = 19."
  },
  {
    q: "Which one of the following is not a delimiter of PHP code?",
    options: ["<?php ?>", "<? ?>", "<caption> </caption>", "<script language='PHP'></script>"],
    answer: 2,
    explanation: "<caption> is HTML tag, not a PHP code delimiter."
  },
  {
    q: "Which one of the following is not an example of scripting languages?",
    options: ["Python", "PHP", "Perl", "C++"],
    answer: 3,
    explanation: "C++ is a compiled language, not typically considered a scripting language."
  },
  {
    q: "Which one of the following phases is done before semantic analysis phase of compiling process?",
    options: ["Code generation", "Intermediate code generation", "Syntax analysis", "Code optimization"],
    answer: 2,
    explanation: "Syntax analysis (parsing) comes before semantic analysis in the compilation process."
  },
  {
    q: "Which deadlock prevention mechanisms don't require timestamp?",
    options: ["No-wait", "Wait-wait", "Wait-die", "Wound-wait"],
    answer: 0,
    explanation: "No-wait prevents deadlock without using timestamps by not allowing processes to wait."
  },
  {
    q: "In a tree data structure, if a node has no parent node, then the node is",
    options: ["Internal node", "External node", "Root node", "Parent node"],
    answer: 2,
    explanation: "The root node has no parent node in a tree structure."
  },
  {
    q: "What is the output of the following C++ fragment code? int a = 6, b = 8; int x = 2, y = 4; int c = (x > y? (a--, x): (b--, y)); cout << 'a= ' << a << ' b= ' << b << ' c= ' << c;",
    options: ["a=6 b=8 c=4", "a=5 b=8 c=4", "a=5 b=7 c=2", "a=6 b=7 c=4"],
    answer: 3,
    explanation: "x>y is false → (b--, y) executed → b = 7, c = 4; a unchanged."
  },
  {
    q: "Which one of the following is evaluating the degrees of success of an agent?",
    options: ["Knowledge", "Action", "Performance measure", "Perception"],
    answer: 2,
    explanation: "Performance measure evaluates how well an agent achieves its goals."
  },
  {
    q: "If you want to allow subclasses to access data fields or methods defined in the superclass, but not allow non-subclasses to access these data fields and methods, which access modifier is appropriate?",
    options: ["public", "protected", "private", "default"],
    answer: 1,
    explanation: "Protected access allows subclasses to access members but hides them from non-subclasses."
  },


  
  {
    q: "Which asymptotic notation describes worst case analysis?",
    options: ["f(n) = little-oh", "f(n) = Ω (Big omega)", "f(n) = little-ω (little omega)", "f(n) = Θ (theta)"],
    answer: 3,
    explanation: "Θ notation gives a tight bound on worst-case time complexity."
  },
  {
    q: "Which type of Turing machine has two tapes, one read-only and one read-write?",
    options: ["Multi-head Turing machine", "Multi-dimensional Turing machine", "Non-deterministic Turing machine", "Off-line Turing machine"],
    answer: 3,
    explanation: "An off-line Turing machine uses a read-only input tape and a read-write working tape."
  },
  {
    q: "Among the following, which one best describes a database management system (DBMS)?",
    options: [
      "It can assist you to process documents",
      "It can assist process images",
      "It is responsible for creating and maintaining a database",
      "It can help users to manage computer's activity"
    ],
    answer: 2,
    explanation: "DBMS provides tools to create, access, and maintain databases."
  },
  {
    q: "Which one of the following does not show non-functional requirement of software systems?",
    options: ["Response time", "Memory requirement", "Reliability", "Displaying information"],
    answer: 3,
    explanation: "Displaying information is a functional requirement, not non-functional."
  },
  {
    q: "Which one of the following is the smallest heading tag?",
    options: ["<H3>", "<H6>", "<H1>", "<H4>"],
    answer: 1,
    explanation: "<H6> is the smallest HTML heading tag."
  },
  {
    q: "Given the schemas: BOOK (Book_id, Title, Publisher_name), BOOK_AUTHOR (Book_id, Author_name), PUBLISHER (Name, Address, Phone) Which SQL is correct to delete publisher named 'XWZ'?",
    options: [
      "DELETE FROM PUBLISHER WHERE Address = 'XWZ'",
      "DELETE FROM BOOK_AUTHOR WHERE Address = 'XWZ'",
      "DELETE FROM PUBLISHER WHERE Name = 'XWZ'",
      "DELETE FROM BOOK WHERE Name = 'XWZ'"
    ],
    answer: 2,
    explanation: "DELETE FROM PUBLISHER WHERE Name='XWZ' correctly deletes the publisher by name."
  },
  {
    q: "Which one of the following is true about frames in HTML?",
    options: [
      "Frames are not difficult to handle for search engines",
      "Frames allow parts of the page to remain stationary while other parts scroll",
      "Load on the server is not affected by the number of frames",
      "All browsers support frames"
    ],
    answer: 1,
    explanation: "Frames allow part of a webpage to remain static while other parts scroll."
  },
  {
    q: "Which statement is true about pop() operation of Stack data structures?",
    options: [
      "pop() inserts new element at the beginning/bottom of stack",
      "pop() returns the end/top element but does not delete it",
      "pop() removes the end/top element from stack",
      "pop() inserts new element at the middle of stack"
    ],
    answer: 2,
    explanation: "pop() removes and returns the top element in a stack."
  },
  {
    q: "Assume a line of patients waiting for service. Seriously sick patients should be served first. Which data structure is most appropriate?",
    options: ["Tree", "Queue", "Priority Queue", "Stack"],
    answer: 2,
    explanation: "Priority Queue serves items based on priority rather than arrival order."
  },
  {
    q: "In which situation using DBMS becomes costly and not recommended?",
    options: [
      "Multiple users access the database",
      "Embedded systems with very small storage space",
      "To control redundancy",
      "To deny access to unauthorized users"
    ],
    answer: 1,
    explanation: "DBMS requires significant storage and processing; in very small embedded systems, it is inefficient."
  },
  {
    q: "Which one of the following is a correct way of creating a String object in Java?",
    options: [
      "String m = new String('Exit Exam');",
      "String m = 'Computer Science';",
      "String m = new String('Technology');",
      "String m = 'H', 'e', 'l', 'l', 'o';"
    ],
    answer: 0,
    explanation: "String objects can be created using new String('text') in Java."
  },
  {
    q: "Which one of the following is a valid statement regarding PHP variables?",
    options: [
      "test = 5;",
      "$test = 'This is Computer science';",
      "$test = 'Computer;",
      "$test = 9.5"
    ],
    answer: 3,
    explanation: "PHP variables must begin with $, so $test = 9.5 is valid."
  },
  {
    q: "Which security service protects disclosure of information from unauthorized entities?",
    options: ["Integrity", "Availability", "Authentication", "Confidentiality"],
    answer: 3,
    explanation: "Confidentiality ensures that data is accessed only by authorized parties."
  },
  {
    q: "Which method is used to obtain the meaning of encrypted information without access to the secret key?",
    options: ["Encryption", "Decryption", "Crypto-analysis", "Cryptography"],
    answer: 2,
    explanation: "Cryptanalysis studies methods to break encrypted messages without the key."
  },
  {
    q: "Which network security issue shows the level of weakness in networks and devices?",
    options: ["Threat", "Attack", "Availability", "Vulnerability"],
    answer: 3,
    explanation: "Vulnerability is a weakness that can be exploited in a system or network."
  },
  {
    q: "After analysis if software requires major change to the architecture, which strategy should be applied?",
    options: ["Software maintenance", "Architectural transformation", "Software reengineering", "Preventative maintenance"],
    answer: 1,
    explanation: "Architectural transformation modifies the system's structure to meet new requirements."
  },
  {
    q: "Which type of variable can be accessed throughout C++ program scope?",
    options: ["Local", "Static", "Automatic", "Global"],
    answer: 3,
    explanation: "Global variables can be accessed throughout the program."
  },
  {
    q: "Which phase of software development refers to modification of software to reflect changing customer and market requirements?",
    options: ["Evolution", "Specification", "Validation", "Development"],
    answer: 0,
    explanation: "Evolution phase handles modifications due to changing requirements."
  },
  {
    q: "Which quantifier can be used for some portion of the universe?",
    options: ["∀", "∃", "¬", "∈"],
    answer: 1,
    explanation: "∃ (existential quantifier) represents 'there exists'."
  },
  {
    q: "Among phases of compiling process, in which phase are characters converted to tokens?",
    options: ["Lexical analysis", "Semantic analysis", "Code optimization", "Syntax analysis"],
    answer: 0,
    explanation: "Lexical analysis converts character sequences into tokens."
  },
  {
    q: "For an input graph, Depth First Traversal algorithm uses which data structure?",
    options: ["Stack", "Queue", "Tree", "Priority Queue"],
    answer: 0,
    explanation: "DFS uses a stack (explicit or via recursion) to traverse nodes."
  },
  {
    q: "Which one of the following is not correct about packet and circuit switching?",
    options: [
      "In packet switching, end-to-end connection must be established",
      "In circuit switching, a channel is dedicatedly used",
      "In packet switching, messages are sent in small blocks",
      "Packet switching is more efficient than circuit switching"
    ],
    answer: 0,
    explanation: "Packet switching does not require a dedicated end-to-end connection."
  },
  {
    q: "Which statement describes: 'Transaction updates a DB item, fails, and another transaction reads the uncorrected value'?",
    options: ["Incorrect summary problem", "Lost update problem", "Dirty read", "Temporary read problem"],
    answer: 2,
    explanation: "Dirty read occurs when a transaction reads uncommitted data from another transaction."
  },
  {
    q: "To check if a computer in the network is reachable, which command is used?",
    options: ["ping", "traceroute", "DHCP discover", "nslookup"],
    answer: 0,
    explanation: "ping sends ICMP packets to test connectivity."
  },
  {
    q: "What will be the output of Math.sqrt(36) in JavaScript?",
    options: ["1", "36", "30", "6"],
    answer: 3,
    explanation: "Math.sqrt(36) returns 6, the square root of 36."
  },
  {
    q: "What will be the output of Math.floor(5.9) in JavaScript?",
    options: ["5", "6", "9", "11.8"],
    answer: 0,
    explanation: "Math.floor() rounds down to the nearest integer, so Math.floor(5.9) = 5."
  },
  {
    q: "Which one of the following is asynchronous in message communication?",
    options: ["Direct message", "Non-blocking receive", "Blocking receive", "Blocking send"],
    answer: 1,
    explanation: "Non-blocking receive allows the program to continue while waiting for a message."
  },
  {
    q: "Given input Alphabet = {a, b, c, d} and empty string X. Which one is equivalent to Σ0?",
    options: ["{A}", "+", "Σ*", "Σ"],
    answer: 2,
    explanation: "Σ0 is the set containing the empty string; equivalent to Σ*^0 = {ε}."
  },
  {
    q: "A university owns several private LANs and WANs for staff, students, and admins. What term best describes this network?",
    options: ["Wide Area Network", "Metropolitan Area Network", "The Internet", "Local Area Network"],
    answer: 0,
    explanation: "WANs connect multiple LANs across wide areas, such as a university campus."
  },
  {
    q: "Assume universe of keys U. Which statement is false regarding Direct Address Table and Hash Table?",
    options: [
      "If U is very large, hash table is better than direct address table",
      "One-to-one correspondence exists between keys and memory in direct address table",
      "Hash table allocates one memory slot per key in U",
      "Direct address table doesn't use a hash function to map keys"
    ],
    answer: 2,
    explanation: "Hash tables do not allocate separate memory for all keys in the universe; that's inefficient."
  },
  {
    q: "If a software is modified, which testing ensures no new errors were introduced?",
    options: ["Dynamic testing", "Static testing", "Beta testing", "Regression testing"],
    answer: 3,
    explanation: "Regression testing checks that modifications did not break existing functionality."
  },
  {
    q: "Which one of the following is false about String in Java?",
    options: [
      "We can create a String object using a literal",
      "In Java a string is treated as object",
      "We can create a String object using array of characters",
      "Content of a string can be changed once created"
    ],
    answer: 3,
    explanation: "Java strings are immutable; content cannot be changed after creation."
  },
  {
    q: "A DBMS has to control locks. Which module does this?",
    options: ["Query optimizer", "Lock table", "Lock manager", "Query processor"],
    answer: 2,
    explanation: "Lock manager is responsible for lock management in DBMS."
  },
  {
    q: "Which one of the following is not true about fan trap in ER diagram?",
    options: [
      "Ambiguous pathway exists between some entity occurrences",
      "Occurs when more than two 1:N relationships fan out from entity",
      "Occurs when there is no pathway between related entities",
      "Can be resolved by readjusting model to avoid 1:N fan-out"
    ],
    answer: 2,
    explanation: "Fan trap is due to multiple 1:N relationships fanning from one entity; 'no pathway' is incorrect."
  },
  {
    q: "Which one of the following is not correct about transaction failure?",
    options: [
      "Transactions fail if logical errors detected",
      "Concurrency control enforcement avoids transaction failure",
      "Catastrophes can cause transaction failure",
      "Transactions fail if disk blocks lose data"
    ],
    answer: 1,
    explanation: "Concurrency control does not prevent all transaction failures; it only manages access conflicts."
  },
  {
    q: "Consider C++ code: const int x=8, y=16; if(x>y){int z=x+y;} Which compiler optimization applies?",
    options: ["Code motion", "Compile time evaluation", "Arithmetic simplification", "Dead code elimination"],
    answer: 3,
    explanation: "Dead code elimination removes code that will never execute (x>y is false)."
  },
  {
    q: "Which network type is the largest compared to the rest?",
    options: ["Wide Area Network", "Metropolitan Area Network", "The Internet", "Local Area Network"],
    answer: 2,
    explanation: "The Internet is the largest network connecting millions of devices worldwide."
  },
  {
    q: "Which one of the following is correct about human role in system administration?",
    options: [
      "Ethics is not required",
      "Requires patience, understanding, and knowledge",
      "Sysadmin need not have skills or confidence",
      "Doesn't need organizational skills"
    ],
    answer: 1,
    explanation: "System administration requires ethics, patience, skill, knowledge, and organization."
  },
  {
    q: "What is the output of the C++ fragment: for(int n=1; n<=18; n+=2){if(n%7!=0) cout<<n<<' '; else break;}",
    options: ["1 3 5", "1 2 3 4 5 6", "3 5 7", "1 3 5 7 11 13 15 17"],
    answer: 0,
    explanation: "Numbers 1,3,5 satisfy n%7!=0; loop breaks at 7."
  },
  {
    q: "Which one of the following is not correct about computer architecture and organization?",
    options: [
      "Architecture can remain for long time, organization can change",
      "Architecture can be used long time across different models",
      "Organization can last as long as architecture",
      "Manufacturers offer same architecture but different organization"
    ],
    answer: 2,
    explanation: "Organization changes faster; it cannot last as long as architecture."
  },
  {
    q: "Which layer uses port number to identify applications?",
    options: ["Application layer", "Physical layer", "Network layer", "Transport layer"],
    answer: 3,
    explanation: "Transport layer uses port numbers to identify applications (e.g., TCP/UDP)."
  },
  {
    q: "Assume weighted graph G(V,E). Which is an optimization problem on G?",
    options: [
      "Traverse all vertices",
      "How many cycles exist",
      "Find minimum spanning tree",
      "Is vertex p reachable from q"
    ],
    answer: 2,
    explanation: "Finding MST is an optimization problem (minimizing total edge weight)."
  },
  {
    q: "When two transactions access same DB items and interleaving causes incorrect value, which problem occurs?",
    options: ["Dirty read", "Incorrect summary", "Lost update", "Temporary read"],
    answer: 2,
    explanation: "Lost update occurs when one transaction overwrites another's updates."
  },
  {
    q: "Time complexity order of binary search algorithm?",
    options: ["O(log2 n)", "O(1)", "O(n)", "O(n³)"],
    answer: 0,
    explanation: "Binary search has O(log n) time complexity."
  },
  {
    q: "Which is true about Java and JavaScript?",
    options: [
      "Both are object-oriented",
      "JavaScript used in sophisticated applications",
      "More features in JavaScript than Java",
      "JavaScript is compiled and interpreted"
    ],
    answer: 1,
    explanation: "JavaScript can be used in web apps, dynamic front-end apps, etc."
  },
  {
    q: "Which is a two-level cache having internal and external caches?",
    options: ["Split cache", "Single level cache", "Multilevel cache", "Unified cache"],
    answer: 2,
    explanation: "Multilevel cache (L1 internal + L2 external) improves performance."
  },
  {
    q: "Which one is not correct about threads?",
    options: [
      "Threads have registers for working memory",
      "Threads are entities scheduled for CPU",
      "It is a group of processes",
      "Threads have program counters"
    ],
    answer: 2,
    explanation: "Threads are not groups of processes; they are smaller units of execution."
  },
  {
    q: "Which one is used for syntax analysis?",
    options: ["Scanner", "Parser", "Linker", "Loader"],
    answer: 1,
    explanation: "Parser checks the grammatical structure of tokens."
  },
  {
    q: "Which statement is false about programming language generations?",
    options: [
      "Assembly language is machine independent",
      "Fifth generation languages need powerful hardware",
      "Machine language can be executed without translation",
      "Assembly must be translated to machine code before execution"
    ],
    answer: 0,
    explanation: "Assembly language is machine dependent, not independent."
  },
  {
    q: "At which OSI layer are bridges, switches, and NICs used?",
    options: ["Application layer", "Physical layer", "Network layer", "Data link layer"],
    answer: 3,
    explanation: "Data link layer handles MAC addresses; switches and NICs operate here."
  },
  {
    q: "Which algorithm can be used to extract Minimum Spanning Tree?",
    options: ["Merge sort", "Huffman encoding", "Prim's algorithm", "Dijkstra's algorithm"],
    answer: 2,
    explanation: "Prim's algorithm finds the minimum spanning tree of a weighted graph."
  },
  {
    q: "A network architecture characteristic that allows network to expand without significant degradation?",
    options: ["Scalability", "Transparency", "Latency", "Availability"],
    answer: 0,
    explanation: "Scalability measures how well a network grows without performance loss."
  },
  {
    q: "Which one is an example of non-preemptive scheduling?",
    options: ["Round Robin", "Shortest Job First (non-preemptive)", "Multilevel Queue", "Preemptive priority scheduling"],
    answer: 1,
    explanation: "SJF non-preemptive executes a job until it finishes without interruption."
  },
  {
    q: "Which one of the following statements is correct about relational database?",
    options: [
      "Data stored in unstructured format",
      "Data stored in hierarchical format",
      "Data stored in tabular format with rows and columns",
      "Data stored in network format"
    ],
    answer: 2,
    explanation: "Relational DB stores data in structured tables (rows and columns)."
  },
  {
    q: "Which one is correct about deadlock?",
    options: [
      "Deadlock occurs when processes wait indefinitely",
      "Deadlock is always fatal",
      "Deadlock never happens in multiprogramming",
      "Deadlock can occur in single-threaded processes"
    ],
    answer: 0,
    explanation: "Deadlock happens when processes wait indefinitely for resources held by each other."
  }


  ],



  
"haramayaa":[


  {
    q: "Which data structure is used to reverse the order of elements?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "By utilizing the LIFO principle, a stack can reverse the order of elements by popping them and then pushing them onto a new stack."
  },
  {
    q: "Which data structure is commonly used for implementing function call stacks in programming languages?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "Stacks are commonly used to manage function calls and their corresponding execution contexts in programming languages."
  },
  {
    q: "Which data structure can be implemented using a circular array or a linked list with pointers?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 1,
    explanation: "A queue can be implemented using a circular array or a linked list with pointers, allowing for efficient enqueue and dequeue operations."
  },
  {
    q: "Which data structure has a First-In-First-Out (FIFO) property?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 1,
    explanation: "A queue follows the FIFO property, meaning that the first element inserted is the first one to be removed."
  },
  {
    q: "Which data structure is suitable for implementing a breadth-first search algorithm?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 1,
    explanation: "Breadth-first search visits nodes level by level, which is best facilitated by a queue to maintain the order of exploration."
  },
  {
    q: "Which data structure uses dynamic memory allocation for node creation?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 2,
    explanation: "Linked lists use dynamic memory allocation to create nodes, allowing for flexibility in size and structure."
  },
  {
    q: "Which data structure can be easily implemented using an array?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "Stacks can be efficiently implemented using arrays, as they only require a top pointer to keep track of the last inserted element."
  },
  {
    q: "Which data structure can be traversed in both forward and backward directions?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 2,
    explanation: "A doubly linked list allows traversal in both forward and backward directions by utilizing the previous and next pointers in each node."
  },
  {
    q: "Which data structure guarantees constant-time access to the first and last elements?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 2,
    explanation: "A doubly linked list guarantees constant-time access to both the first and last elements by maintaining appropriate references."
  },
  {
    q: "Which data structure can be efficiently used for implementing undo and redo functionality in applications?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "Stacks are commonly used for implementing undo and redo functionality, where actions can be pushed onto the stack and popped for undo or redo operations."
  },
  {
    q: "Which data structure is best suited for reversing the order of elements in a list?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 2,
    explanation: "Reversing the order of elements in a linked list can be efficiently achieved by modifying the pointers of each node."
  },
  {
    q: "Which data structure can be used to implement a depth-first search algorithm?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "Depth-first search utilizes a stack to store the unvisited nodes and explore the graph or tree in a depth-first manner."
  },
  {
    q: "Which data structure can be used to implement a priority queue?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 3,
    explanation: "A binary heap, which is a type of binary tree, can be used to implement a priority queue efficiently."
  },
  {
    q: "Which data structure follows the Last-In-First-Out (LIFO) principle?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "In a stack, the last element inserted is the first one to be removed, following the LIFO principle."
  },
  {
    q: "Which data structure follows the First-In-First-Out (FIFO) principle?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 1,
    explanation: "In a queue, the first element inserted is the first one to be removed, following the FIFO principle."
  },
  {
    q: "Which data structure allows access to elements only at the beginning and the end?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 2,
    explanation: "A linked list allows access to elements only at the beginning (head) and the end (tail) by traversing the nodes."
  },
  {
    q: "Which data structure is based on nodes connected via pointers?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 2,
    explanation: "In a linked list, nodes are connected via pointers or references, forming a sequence of elements."
  },
  {
    q: "Which data structure can be implemented using an array or a linked list?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "A stack can be implemented using either an array or a linked list, as both provide the required operations."
  },
  {
    q: "Which data structure allows elements to be inserted and removed from both ends?",
    options: ["Stack", "Queue", "Deque", "Binary tree"],
    answer: 2,
    explanation: "A deque (double-ended queue) allows elements to be inserted and removed from both the front and the rear."
  },
  {
    q: "Which data structure ensures that elements are accessed in a specific order?",
    options: ["Stack", "Queue", "Priority queue", "Binary tree"],
    answer: 2,
    explanation: "A priority queue ensures that elements are accessed according to their priority, which is specified during insertion."
  },


  {
    q: "Which data structure is a binary tree with the property that the value of each node is greater than or equal to its left child and less than or equal to its right child?",
    options: ["AVL tree", "Binary search tree", "Red-black tree", "B-tree"],
    answer: 1,
    explanation: "A binary search tree (BST) follows the property where the value of each node is greater than or equal to its left child and less than or equal to its right child."
  },
  {
    q: "Which data structure represents a hierarchical structure with a set of connected nodes?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 3,
    explanation: "A binary tree represents a hierarchical structure where each node can have at most two children."
  },
  {
    q: "Which data structure allows efficient insertion and deletion at both ends?",
    options: ["Stack", "Queue", "Deque", "Binary tree"],
    answer: 2,
    explanation: "A deque (double-ended queue) allows efficient insertion and deletion at both the front and the rear ends."
  },
  {
    q: "Which data structure can be used to reverse the order of elements?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "By using a stack, the order of elements can be reversed as elements are inserted and removed in the reverse order."
  },
  {
    q: "Which data structure uses the concept of 'first in, last out' to handle function calls and recursion?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "Stacks are commonly used in programming to handle function calls and recursion, as the most recent function call is completed first."
  },
  {
    q: "Which data structure is suitable for implementing breadth-first search (BFS) algorithm?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 1,
    explanation: "The BFS algorithm explores nodes in a level-by-level manner, making a queue a suitable data structure to store the nodes."
  },
  {
    q: "Which data structure is suitable for implementing depth-first search (DFS) algorithm?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "The DFS algorithm explores nodes by going as deep as possible before backtracking, making a stack a suitable data structure to store the nodes."
  },
  {
    q: "Which data structure can be used to implement a cache with a limited capacity?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "By limiting the capacity of a stack, the least recently used items are automatically removed when the stack is full, making it suitable for implementing a cache."
  },
  {
    q: "Which data structure is commonly used for implementing undo-redo functionality in text editors?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "A stack is commonly used to implement undo-redo functionality in text editors, where the most recent changes can be undone or redone."
  },
  {
    q: "Which data structure allows easy traversal in a Last-In-First-Out (LIFO) order?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "Stacks allow easy traversal in a LIFO order, where the most recently inserted element is accessed first."
  },
  {
    q: "Which data structure allows efficient insertion and deletion at both ends, and supports constant-time access to the middle element?",
    options: ["Stack", "Queue", "Deque", "Binary tree"],
    answer: 2,
    explanation: "A deque (double-ended queue) allows efficient insertion and deletion at both ends and supports constant-time access to the middle element."
  },
  {
    q: "Which data structure is commonly used for implementing the undo operation in a text editor?",
    options: ["Stack", "Queue", "Linked list", "Binary tree"],
    answer: 0,
    explanation: "A stack is commonly used to implement the undo operation in a text editor, where the most recent changes can be undone in reverse order."
  },
  {
    q: "Which data structure is used to implement a buffer with a fixed-size capacity?",
    options: ["Stack", "Queue", "Linked list", "Circular buffer"],
    answer: 3,
    explanation: "A circular buffer is a data structure that uses a fixed-size array and maintains a read and write pointer to implement a buffer with a fixed-size capacity."
  },
  {
    q: "Which sorting algorithm has a worst-case time complexity of O(n^2)?",
    options: ["Merge sort", "Quick sort", "Insertion sort", "Heap sort"],
    answer: 2,
    explanation: "Insertion sort has a worst-case time complexity of O(n^2) when the input array is in reverse order."
  },
  {
    q: "Which sorting algorithm is based on the divide-and-conquer strategy?",
    options: ["Bubble sort", "Selection sort", "Merge sort", "Radix sort"],
    answer: 2,
    explanation: "Merge sort divides the input array into smaller subarrays, sorts them recursively, and then merges them back together."
  },
  {
    q: "Which sorting algorithm is known for its stability, meaning that elements with equal keys retain their relative order?",
    options: ["Quick sort", "Heap sort", "Radix sort", "Merge sort"],
    answer: 3,
    explanation: "Merge sort is stable because it merges the subarrays in a way that preserves the relative order of equal elements."
  },
  {
    q: "Which sorting algorithm uses a pivot element to partition the array into two subarrays?",
    options: ["Bubble sort", "Selection sort", "Quick sort", "Insertion sort"],
    answer: 2,
    explanation: "Quick sort selects a pivot element, partitions the array around it, and recursively sorts the subarrays."
  },
  {
    q: "Which sorting algorithm has a time complexity of O(n log n) in the average and worst cases?",
    options: ["Bubble sort", "Selection sort", "Merge sort", "Radix sort"],
    answer: 2,
    explanation: "Merge sort has a time complexity of O(n log n) in both the average and worst cases."
  },
  {
    q: "Which searching algorithm is based on comparing the target value with elements at midpoints of the array?",
    options: ["Linear search", "Binary search", "Interpolation search", "Depth-first search"],
    answer: 1,
    explanation: "Binary search repeatedly divides the search space in half by comparing the target value with the middle element."
  },
  {
    q: "Which searching algorithm is applicable only to sorted arrays?",
    options: ["Linear search", "Binary search", "Interpolation search", "Depth-first search"],
    answer: 1,
    explanation: "Binary search requires a sorted array to perform the divide-and-conquer strategy."
  },
  {
    q: "Which searching algorithm works by comparing the target value with elements from the beginning of the array until a match is found?",
    options: ["Linear search", "Binary search", "Interpolation search", "Depth-first search"],
    answer: 0,
    explanation: "Linear search checks each element in the array sequentially until a match is found or the end of the array is reached."
  },
  {
    q: "Which searching algorithm is more efficient for uniformly distributed data in a sorted array?",
    options: ["Linear search", "Binary search", "Interpolation search", "Depth-first search"],
    answer: 2,
    explanation: "Interpolation search makes an educated guess about the position of the target value based on the distribution of the data."
  },
  {
    q: "Which searching algorithm is commonly used for searching in graphs and trees?",
    options: ["Linear search", "Binary search", "Depth-first search", "Breadth-first search"],
    answer: 2,
    explanation: "Depth-first search explores vertices or nodes in a graph or tree by going as deep as possible before backtracking."
  },
  {
    q: "Which sorting algorithm has the worst-case time complexity of O(n^2)?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 0,
    explanation: "Bubble sort compares adjacent elements and swaps them if they are in the wrong order, resulting in a worst-case time complexity of O(n^2)."
  },
  {
    q: "Which sorting algorithm is based on the divide-and-conquer strategy?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 2,
    explanation: "Merge sort divides the input into smaller subproblems, sorts them recursively, and then merges the sorted subproblems to obtain the final sorted output."
  },
  {
    q: "Which sorting algorithm has the average-case time complexity of O(n log n)?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 1,
    explanation: "Quick sort, on average, has a time complexity of O(n log n) by choosing a pivot element to partition the input and recursively sorting the subarrays."
  },
  {
    q: "Which sorting algorithm works by repeatedly selecting the smallest element from the unsorted portion and placing it at the beginning?",
    options: ["Bubble sort", "Quick sort", "Selection sort", "Insertion sort"],
    answer: 2,
    explanation: "Selection sort repeatedly finds the smallest element from the unsorted portion and swaps it with the element at the beginning of the sorted portion."
  },
  {
    q: "Which sorting algorithm is an in-place comparison sort algorithm?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 1,
    explanation: "Quick sort operates by partitioning the input array and sorting it in-place, requiring no additional memory for the sorting process."
  },
  {
    q: "Which searching algorithm requires the input array to be sorted?",
    options: ["Linear search", "Binary search", "Hash search", "Depth-first search"],
    answer: 1,
    explanation: "Binary search requires the input array to be sorted and operates by repeatedly dividing the search space in half until the target element is found."
  },
  {
    q: "Which searching algorithm has a worst-case time complexity of O(log n)?",
    options: ["Linear search", "Binary search", "Hash search", "Depth-first search"],
    answer: 1,
    explanation: "Binary search has a worst-case time complexity of O(log n) due to its ability to divide the search space in half at each step."
  },




  {
    q: "Which searching algorithm is based on comparing the target element with elements at regular intervals?",
    options: ["Linear search", "Binary search", "Hash search", "Depth-first search"],
    answer: 2,
    explanation: "Hash search involves comparing the target element with elements at regular intervals based on a hashing function."
  },
  {
    q: "Which searching algorithm is suitable for unsorted arrays or lists?",
    options: ["Linear search", "Binary search", "Hash search", "Depth-first search"],
    answer: 0,
    explanation: "Linear search can be applied to unsorted arrays or lists by sequentially comparing each element until the target element is found."
  },
  {
    q: "Which searching algorithm is commonly used for traversing graphs or trees?",
    options: ["Linear search", "Binary search", "Hash search", "Depth-first search"],
    answer: 3,
    explanation: "Depth-first search is a graph/tree traversal algorithm that explores as far as possible along each branch before backtracking."
  },
  {
    q: "Which sorting algorithm has the best-case time complexity of O(n)?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 3,
    explanation: "Insertion sort has a best-case time complexity of O(n) when the input array is already sorted, requiring minimal comparisons and swaps."
  },
  {
    q: "Which sorting algorithm is stable, meaning it preserves the relative order of equal elements?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 2,
    explanation: "Merge sort is a stable sorting algorithm as it guarantees the relative order of equal elements during the merging phase."
  },
  {
    q: "Which sorting algorithm is commonly used for small input sizes or partially sorted arrays?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 3,
    explanation: "Insertion sort performs well on small input sizes or partially sorted arrays due to its efficient element insertion strategy."
  },
  {
    q: "Which searching algorithm divides the search space into three parts at each step?",
    options: ["Linear search", "Binary search", "Ternary search", "Depth-first search"],
    answer: 2,
    explanation: "Ternary search divides the search space into three equal parts at each step, narrowing down the search space more quickly than binary search."
  },
  {
    q: "Which sorting algorithm has a space complexity of O(1) in the best and average cases?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 3,
    explanation: "Insertion sort requires only a constant amount of additional space, resulting in a space complexity of O(1) in the best and average cases."
  },
  {
    q: "Which searching algorithm is based on the principle of divide-and-conquer?",
    options: ["Linear search", "Binary search", "Hash search", "Depth-first search"],
    answer: 1,
    explanation: "Binary search divides the search space in half at each step, following the divide-and-conquer strategy."
  },
  {
    q: "Which sorting algorithm has the worst-case time complexity of O(n log n)?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 2,
    explanation: "Merge sort has a worst-case time complexity of O(n log n) due to its recursive divide-and-conquer approach."
  },
  {
    q: "Which sorting algorithm is efficient for sorting data in external memory (hard disks)?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 2,
    explanation: "Merge sort is efficient for sorting data in external memory as it minimizes disk I/O operations by performing sequential reads and writes."
  },
  {
    q: "Which searching algorithm is suitable for large datasets or databases?",
    options: ["Linear search", "Binary search", "Hash search", "Depth-first search"],
    answer: 2,
    explanation: "Hash search is suitable for large datasets or databases due to its efficient lookup time based on hash values."
  },
  {
    q: "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    answer: 1,
    explanation: "Quick sort has the best average-case time complexity among the given options, with an average complexity of O(n log n) when implemented efficiently."
  },
  {
    q: "Which data structure is best suited for implementing a dictionary with fast lookup and insertion?",
    options: ["Array", "Linked list", "Hash table", "Stack"],
    answer: 2,
    explanation: "Hash tables provide fast lookup and insertion operations with an average time complexity of O(1) using key-value pairs."
  },
  {
    q: "Which algorithm is commonly used for finding the shortest path in a graph?",
    options: ["Depth-first search", "Breadth-first search", "Dijkstra's algorithm", "Prim's algorithm"],
    answer: 2,
    explanation: "Dijkstra's algorithm is widely used for finding the shortest path between nodes in a weighted graph."
  },
  {
    q: "Which data structure is typically used to implement a stack?",
    options: ["Array", "Linked list", "Queue", "Tree"],
    answer: 1,
    explanation: "Linked lists provide efficient insertion and deletion operations at the beginning of the list, making them suitable for implementing a stack."
  },
  {
    q: "Which algorithm is used to sort elements in a specific order based on their priorities?",
    options: ["Bubble sort", "Quick sort", "Merge sort", "Heap sort"],
    answer: 3,
    explanation: "Heap sort uses a binary heap data structure to sort elements based on their priorities, making it an efficient priority-based sorting algorithm."
  },
  {
    q: "Which data structure is best suited for implementing a cache with efficient insertion and removal of elements?",
    options: ["Array", "Linked list", "Hash table", "Queue"],
    answer: 2,
    explanation: "Hash tables provide fast insertion and removal operations, making them suitable for implementing a cache with efficient key-based access."
  },
  {
    q: "Which algorithm is used to find the maximum subarray sum in an array?",
    options: ["Binary search", "Quick sort", "Merge sort", "Kadane's algorithm"],
    answer: 3,
    explanation: "Kadane's algorithm is used to find the maximum subarray sum in an array with a time complexity of O(n)."
  },
  {
    q: "Which data structure is commonly used to implement a graph?",
    options: ["Array", "Linked list", "Hash table", "Adjacency list"],
    answer: 3,
    explanation: "Adjacency lists are commonly used to represent graphs efficiently by storing the vertices and their adjacent vertices."
  },
  {
    q: "Which algorithm is used to find the minimum spanning tree in a graph?",
    options: ["Depth-first search", "Breadth-first search", "Dijkstra's algorithm", "Prim's algorithm"],
    answer: 3,
    explanation: "Prim's algorithm is used to find the minimum spanning tree in a weighted graph, connecting all vertices with the minimum total weight."
  },
  {
    q: "Which data structure is best suited for implementing a priority queue?",
    options: ["Array", "Linked list", "Heap", "Queue"],
    answer: 2,
    explanation: "Heaps provide efficient insertion and deletion of elements with the highest priority, making them suitable for implementing a priority queue."
  },
  {
    q: "Which algorithm is commonly used for pattern matching in strings?",
    options: ["Depth-first search", "Breadth-first search", "Dijkstra's algorithm", "Knuth-Morris-Pratt algorithm"],
    answer: 3,
    explanation: "The Knuth-Morris-Pratt algorithm is used for efficient pattern matching in strings by avoiding unnecessary comparisons based on previously matched characters."
  },
  {
    q: "Which of the following is not a primary function of the network layer in the OSI model?",
    options: ["Routing", "Addressing", "Flow control", "Fragmentation"],
    answer: 2,
    explanation: "The network layer is responsible for routing packets across different networks and providing addressing and fragmentation services. Flow control is typically handled by the transport layer."
  },
  {
    q: "What is the purpose of a MAC address in computer networking?",
    options: ["To identify a device within a local area network (LAN)", "To identify a device within a wide area network (WAN)", "To establish a secure connection between two devices", "To determine the IP address of a device"],
    answer: 0,
    explanation: "A MAC (Media Access Control) address is a unique identifier assigned to a network interface card (NIC) and is used to identify a device within a local network."
  },


  {
    q: "What is the purpose of a firewall in computer networks?",
    options: [
      "To encrypt network traffic for secure communication",
      "To manage network resources and allocate bandwidth",
      "To filter and control network traffic based on predefined rules",
      "To connect two separate networks and enable communication between them"
    ],
    answer: 2,
    explanation: "A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on a set of rules to protect the network from unauthorized access and potential threats."
  },
  {
    q: "Which of the following network topologies provides the highest fault tolerance?",
    options: ["Bus topology", "Ring topology", "Star topology", "Mesh topology"],
    answer: 3,
    explanation: "In a mesh topology, each device is connected to every other device, providing multiple redundant paths. This redundancy enhances fault tolerance and ensures high availability in case of link failures."
  },
  {
    q: "Which network addressing scheme is used in IPv6?",
    options: ["Classful addressing", "Classless addressing", "Subnetting", "CIDR (Classless Inter-Domain Routing)"],
    answer: 1,
    explanation: "IPv6 uses classless addressing, where the length of the network prefix is not fixed as in classful addressing. It allows for more efficient allocation of IP addresses and supports hierarchical addressing."
  },
  {
    q: "Which protocol is responsible for translating domain names into IP addresses?",
    options: ["DHCP (Dynamic Host Configuration Protocol)", "DNS (Domain Name System)", "ARP (Address Resolution Protocol)", "ICMP (Internet Control Message Protocol)"],
    answer: 1,
    explanation: "DNS is responsible for translating domain names, such as www.example.com, into corresponding IP addresses."
  },
  {
    q: "What is the purpose of NAT (Network Address Translation) in computer networks?",
    options: [
      "To secure network communications through encryption",
      "To provide redundancy and fault tolerance",
      "To translate private IP addresses to public IP addresses",
      "To manage network resources and allocate bandwidth"
    ],
    answer: 2,
    explanation: "NAT allows multiple devices within a private network to share a single public IP address by translating the private IP addresses to the public IP address when communicating with external networks."
  },
  {
    q: "Which of the following is an example of a connectionless protocol?",
    options: ["TCP (Transmission Control Protocol)", "UDP (User Datagram Protocol)", "HTTP (Hypertext Transfer Protocol)", "FTP (File Transfer Protocol)"],
    answer: 1,
    explanation: "UDP is a connectionless protocol that does not establish a dedicated connection before sending data. It provides fast and lightweight communication but does not guarantee reliable delivery."
  },
  {
    q: "Which network device operates at the Data Link layer of the OSI model?",
    options: ["Hub", "Switch", "Router", "Bridge"],
    answer: 1,
    explanation: "A switch operates at the Data Link layer (Layer 2) of the OSI model and is responsible for forwarding data packets between devices within a local network based on their MAC addresses."
  },
  {
    q: "Which protocol is used for secure communication over the internet?",
    options: ["HTTP", "FTP", "HTTPS", "SMTP"],
    answer: 2,
    explanation: "HTTPS (Hypertext Transfer Protocol Secure) is a protocol that uses encryption to ensure secure communication over the internet. It is commonly used for secure transactions, such as online banking and e-commerce."
  },
  {
    q: "What is the function of a router in a computer network?",
    options: [
      "To connect multiple networks together",
      "To amplify the strength of network signals",
      "To provide firewall protection",
      "To manage network resources and allocate bandwidth"
    ],
    answer: 0,
    explanation: "A router is a networking device that forwards data packets between different networks. It connects multiple networks and determines the best path for data transmission."
  },
  {
    q: "Which of the following is a network device that operates at the Physical layer of the OSI model?",
    options: ["Switch", "Hub", "Router", "Bridge"],
    answer: 1,
    explanation: "A hub is a network device that operates at the Physical layer (Layer 1) of the OSI model. It simply broadcasts incoming data to all connected devices without any intelligence or filtering."
  },
  {
    q: "Which network component is responsible for converting digital data into analog signals for transmission over telephone lines?",
    options: ["Modem", "Router", "Switch", "Firewall"],
    answer: 0,
    explanation: "A modem (Modulator-Demodulator) is used to modulate digital data into analog signals for transmission over analog telephone lines. It also demodulates the analog signals back into digital data at the receiving end."
  },
  {
    q: "Which protocol is used for sending and receiving email messages?",
    options: ["SMTP", "HTTP", "FTP", "DNS"],
    answer: 0,
    explanation: "SMTP (Simple Mail Transfer Protocol) is the standard protocol used for sending and receiving email messages between mail servers."
  },
  {
    q: "What is the purpose of DNS (Domain Name System) in computer networks?",
    options: [
      "To encrypt network traffic for secure communication",
      "To manage network resources and allocate bandwidth",
      "To convert domain names into IP addresses",
      "To provide firewall protection"
    ],
    answer: 2,
    explanation: "DNS is responsible for translating domain names, such as www.example.com, into their corresponding IP addresses. It acts as a directory for mapping human-readable domain names to machine-readable IP addresses."
  },
  {
    q: "Which of the following is a network protocol used for file transfer between computers?",
    options: ["HTTP", "FTP", "SMTP", "TCP"],
    answer: 1,
    explanation: "FTP (File Transfer Protocol) is a network protocol used for transferring files between computers over a network. It provides functionalities for uploading, downloading, and managing files on remote servers."
  },
  {
    q: "Which network component is responsible for connecting multiple devices within a local area network (LAN)?",
    options: ["Hub", "Router", "Switch", "Modem"],
    answer: 2,
    explanation: "A switch is a network component used to connect multiple devices within a local area network (LAN). It forwards data packets to the intended device based on their MAC addresses."
  },
  {
    q: "What is the primary function of a firewall in a computer network?",
    options: [
      "To manage network resources and allocate bandwidth",
      "To encrypt network traffic for secure communication",
      "To filter and monitor network traffic for security purposes",
      "To convert domain names into IP addresses"
    ],
    answer: 2,
    explanation: "A firewall is a security device that monitors and filters network traffic based on predetermined rules. It acts as a barrier between the internal network and external networks, providing protection against unauthorized access and malicious activities."
  },
  {
    q: "Which protocol is responsible for assigning IP addresses to devices on a network automatically?",
    options: ["HTTP", "DNS", "DHCP", "FTP"],
    answer: 2,
    explanation: "DHCP is a network protocol that dynamically assigns IP addresses to devices on a network. It simplifies the process of network configuration by automatically providing IP addresses, subnet masks, and other network parameters to connected devices."
  },
  {
    q: "Which layer of the OSI reference model is responsible for establishing, managing, and terminating connections between devices?",
    options: ["Physical layer", "Data Link layer", "Transport layer", "Session layer"],
    answer: 2,
    explanation: "The transport layer is responsible for establishing, managing, and terminating connections between devices. It ensures reliable data delivery and provides mechanisms for flow control and error recovery."
  },
  {
    q: "Which protocol is used for reliable data delivery at the transport layer in the TCP/IP protocol suite?",
    options: ["UDP", "IP", "FTP", "TCP"],
    answer: 3,
    explanation: "TCP is a reliable transport protocol that ensures the reliable delivery of data between devices in the TCP/IP protocol suite. It provides features such as error detection, flow control, and congestion control."
  },
  {
    q: "Which layer of the OSI reference model is responsible for addressing and routing data packets across different networks?",
    options: ["Network layer", "Data Link layer", "Transport layer", "Physical layer"],
    answer: 0,
    explanation: "The network layer is responsible for addressing and routing data packets across different networks. It determines the optimal path for data transmission and performs logical addressing using IP addresses."
  },
  {
    q: "Which layer of the OSI reference model is responsible for reliable data delivery within the same network segment?",
    options: ["Network layer", "Transport layer", "Data Link layer", "Application layer"],
    answer: 2,
    explanation: "The Data Link layer is responsible for reliable data delivery within the same network segment. It handles the framing of data packets, error detection, and correction at the link level."
  },
  {
    q: "Which protocol is used for sending and receiving email messages over the internet?",
    options: ["SMTP", "FTP", "HTTP", "DNS"],
    answer: 0,
    explanation: "SMTP is the standard protocol used for sending and receiving email messages over the internet. It is responsible for the transfer of email messages between mail servers."
  },
  {
    q: "Which layer of the OSI reference model is responsible for converting data into a format suitable for transmission over a network?",
    options: ["Presentation layer", "Session layer", "Physical layer", "Application layer"],
    answer: 0,
    explanation: "The presentation layer is responsible for converting data into a format suitable for transmission over a network. It handles data compression, encryption, and formatting."
  },
  {
    q: "Which protocol is used for translating domain names into IP addresses?",
    options: ["DNS", "FTP", "HTTP", "SMTP"],
    answer: 0,
    explanation: "DNS is used for translating domain names into their corresponding IP addresses. It acts as a distributed database that maps domain names to IP addresses."
  }



  
















  
  
  ],

  
"AMBO":[

  {
    q: "Which phase of the software development life cycle is responsible for gathering and analyzing user requirements?",
    options: ["Analysis", "Design", "Development", "Testing"],
    answer: 0,
    explanation: "The analysis phase focuses on gathering and analyzing user requirements to understand what the software should accomplish."
  },
  {
    q: "Which design principle suggests that software components should have a single, well-defined responsibility?",
    options: ["DRY (Don't Repeat Yourself) principle", "SOLID principle", "KISS (Keep It Simple, Stupid) principle", "YAGNI (You Ain't Gonna Need It) principle"],
    answer: 1,
    explanation: "The SOLID principle includes the Single Responsibility Principle, which states that a software component should have only one responsibility."
  },
  {
    q: "Which of the following is an agile development methodology?",
    options: ["Waterfall model", "Scrum", "V-model", "Spiral model"],
    answer: 1,
    explanation: "Scrum is an agile development methodology that emphasizes iterative development, collaboration, and flexibility."
  },
  {
    q: "Which software development approach involves breaking down a project into small, deliverable increments?",
    options: ["Waterfall model", "Agile methodology", "Prototype model", "Spiral model"],
    answer: 1,
    explanation: "Agile methodology involves breaking down a project into small, deliverable increments called iterations or sprints, allowing for continuous feedback and adaptation."
  },
  {
    q: "Which software testing technique focuses on finding defects by executing the software without knowledge of its internal structure?",
    options: ["White-box testing", "Black-box testing", "Integration testing", "System testing"],
    answer: 1,
    explanation: "Black-box testing is a software testing technique where the software is tested without knowledge of its internal structure."
  },
  {
    q: "Which diagramming technique is used to visualize the behavior of a software system over time?",
    options: ["Use case diagrams", "Class diagrams", "Sequence diagrams", "State machine diagrams"],
    answer: 2,
    explanation: "Sequence diagrams are used to visualize the behavior of a software system over time, showing interactions between objects or components."
  },
  {
    q: "Which software development methodology promotes adaptive planning, evolutionary development, and continuous improvement?",
    options: ["Waterfall model", "Agile methodology", "V-model", "Spiral model"],
    answer: 1,
    explanation: "Agile methodology promotes adaptive planning, evolutionary development, and continuous improvement."
  },
  {
    q: "Which technique is used to represent the flow of activities and decisions in a software system?",
    options: ["Use case modeling", "Activity diagrams", "State machine diagrams", "Component diagrams"],
    answer: 1,
    explanation: "Activity diagrams represent the flow of activities and decisions in a software system, showing sequence of actions and conditions."
  },
  {
    q: "Which software development approach involves building a working version of the software system early in the development process?",
    options: ["Waterfall model", "Agile methodology", "Prototype model", "Spiral model"],
    answer: 2,
    explanation: "The prototype model involves building a working version early to gather feedback and refine requirements."
  },
  {
    q: "Which testing technique focuses on testing the interaction between different components or modules of a software system?",
    options: ["Unit testing", "Integration testing", "System testing", "Regression testing"],
    answer: 1,
    explanation: "Integration testing ensures that different components or modules work together correctly."
  },
  {
    q: "Which design principle suggests that software entities should depend on abstractions, not on concrete implementations?",
    options: ["DRY (Don't Repeat Yourself) principle", "SOLID principle", "KISS (Keep It Simple, Stupid) principle", "YAGNI (You Ain't Gonna Need It) principle"],
    answer: 1,
    explanation: "The Dependency Inversion principle of SOLID states that software entities should depend on abstractions rather than concrete implementations."
  },
  {
    q: "Which software development approach follows a linear, sequential flow from requirements gathering to testing and maintenance?",
    options: ["Waterfall model", "Agile methodology", "Prototype model", "Spiral model"],
    answer: 0,
    explanation: "The waterfall model follows a linear, sequential flow where each phase is completed before moving to the next."
  },
  {
    q: "Which technique is used to estimate the size and complexity of a software project?",
    options: ["Use case modeling", "Storyboarding", "Function point analysis", "Pair programming"],
    answer: 2,
    explanation: "Function point analysis estimates the size and complexity of a project based on system functionality."
  },
  {
    q: "Which tool is used to track and manage software issues, bugs, and tasks throughout the development process?",
    options: ["Git", "Jira", "Jenkins", "Docker"],
    answer: 1,
    explanation: "Jira is a widely used tool for issue tracking and project management."
  },
  {
    q: "Which design principle suggests that software entities should be open for extension but closed for modification?",
    options: ["DRY (Don't Repeat Yourself) principle", "SOLID principle", "KISS (Keep It Simple, Stupid) principle", "YAGNI (You Ain't Gonna Need It) principle"],
    answer: 1,
    explanation: "The Open-Closed principle of SOLID states that software entities should be open for extension but closed for modification."
  },
  {
    q: "Which technique is used to represent the static structure of a software system, including classes, relationships, and attributes?",
    options: ["Use case diagrams", "Class diagrams", "Sequence diagrams", "State machine diagrams"],
    answer: 1,
    explanation: "Class diagrams represent the static structure of a system including classes, relationships, and attributes."
  },
  {
    q: "Which software development methodology involves regular and frequent communication between developers and stakeholders?",
    options: ["Waterfall model", "Agile methodology", "V-model", "Spiral model"],
    answer: 1,
    explanation: "Agile methodology emphasizes frequent communication between developers and stakeholders."
  },
  {
    q: "Which technique is used to capture and document user requirements in a structured manner?",
    options: ["Use case modeling", "Storyboarding", "Wireframing", "Pair programming"],
    answer: 0,
    explanation: "Use case modeling captures and documents user requirements in a structured manner."
  },
  {
    q: "Which testing technique focuses on retesting modified or affected parts of the software to ensure that changes do not introduce new defects?",
    options: ["Unit testing", "Integration testing", "Regression testing", "System testing"],
    answer: 2,
    explanation: "Regression testing ensures changes do not introduce new defects or break existing functionality."
  },
  {
    q: "Which tool is used to package an application and its dependencies into a container for easy deployment and scalability?",
    options: ["Git", "Jira", "Jenkins", "Docker"],
    answer: 3,
    explanation: "Docker packages an application and its dependencies into a container for consistent deployment."
  },
  {
    q: "Which phase of the software development life cycle (SDLC) focuses on gathering and understanding user requirements?",
    options: ["Analysis", "Design", "Implementation", "Testing"],
    answer: 0,
    explanation: "The analysis phase is dedicated to gathering and understanding user requirements."
  },
  {
    q: "What is the primary goal of software design?",
    options: ["To create a visually appealing user interface", "To optimize performance", "To translate user requirements into a detailed plan", "To develop and test individual software components"],
    answer: 2,
    explanation: "The primary goal of software design is to translate user requirements into a detailed plan."
  },
  {
    q: "Which software development approach emphasizes frequent iterations, collaboration, and responsiveness to change?",
    options: ["Waterfall model", "Agile methodology", "Spiral model", "V-model"],
    answer: 1,
    explanation: "Agile methodology focuses on delivering working software incrementally with continuous feedback."
  },
  {
    q: "What is the purpose of modularization in software design?",
    options: ["To improve code readability", "To ensure efficient memory management", "To facilitate code reuse and maintenance", "To minimize software defects"],
    answer: 2,
    explanation: "Modularization breaks down a system into smaller modules for reuse, maintainability, and collaboration."
  },
  {
    q: "Which type of testing aims to uncover defects in the interaction between different components of a software system?",
    options: ["Unit testing", "Integration testing", "System testing", "Regression testing"],
    answer: 1,
    explanation: "Integration testing uncovers defects in the interaction between system components."
  },
  {
    q: "Which programming paradigm is based on the concept of objects and their interactions?",
    options: ["Functional programming", "Procedural programming", "Object-oriented programming", "Event-driven programming"],
    answer: 2,
    explanation: "Object-oriented programming is based on objects which encapsulate data and behavior."
  },
  {
    q: "What is the purpose of version control systems in software development?",
    options: ["To manage schedules", "To facilitate collaboration", "To track and control changes to source code", "To automate deployment"],
    answer: 2,
    explanation: "Version control systems track and control changes to source code and files, enabling collaboration."
  },
  {
    q: "Which software development methodology follows a sequential flow, with each phase being completed before moving to the next?",
    options: ["Waterfall model", "Agile methodology", "Spiral model", "V-model"],
    answer: 0,
    explanation: "The waterfall model completes each SDLC phase before moving to the next."
  },
  {
    q: "What is the primary purpose of software documentation?",
    options: ["Record code authorship", "Provide instructions for end-users", "Assist in maintenance and understanding", "Ensure compliance with coding standards"],
    answer: 2,
    explanation: "Documentation assists in software maintenance and understanding, providing information about architecture, design, and functionality."
  },
  {
    q: "Which software development approach involves building small, incremental releases of the software system?",
    options: ["Waterfall model", "Agile methodology", "Spiral model", "V-model"],
    answer: 1,
    explanation: "Agile methodology builds small, incremental releases allowing continuous feedback and flexibility."
  },
  {
    q: "Which design principle advocates for designing software components that have a single responsibility?",
    options: ["Encapsulation", "Inheritance", "Polymorphism", "Single Responsibility Principle"],
    answer: 3,
    explanation: "The Single Responsibility Principle states a component should have only one reason to change."
  },
  {
    q: "Which design pattern is used to ensure that only one instance of a class is created throughout the system?",
    options: ["Singleton pattern", "Factory pattern", "Observer pattern", "Decorator pattern"],
    answer: 0,
    explanation: "The Singleton pattern ensures only one instance of a class exists and provides a global point of access."
  },
  {
    q: "Which type of testing focuses on evaluating the behavior of a software system under normal operating conditions?",
    options: ["Stress testing", "Performance testing", "Functional testing", "Usability testing"],
    answer: 2,
    explanation: "Functional testing ensures the system behaves correctly under normal operating conditions."
  },
  {
    q: "Which programming paradigm promotes the use of data and avoids side effects?",
    options: ["Functional programming", "Procedural programming", "Object-oriented programming", "Event-driven programming"],
    answer: 0,
    explanation: "Functional programming uses immutable data and avoids side effects."
  },
  {
    q: "Which type of software maintenance involves making changes to adapt a system to new environments or technologies?",
    options: ["Corrective maintenance", "Adaptive maintenance", "Perfective maintenance", "Preventive maintenance"],
    answer: 1,
    explanation: "Adaptive maintenance modifies software to remain functional in new environments or technologies."
  },
  {
    q: "What is the purpose of usability testing in software development?",
    options: ["Evaluate performance under stress", "Assess user-friendliness and ease of use", "Verify compliance with requirements", "Identify and fix defects"],
    answer: 1,
    explanation: "Usability testing evaluates the system from a user's perspective to ensure it is user-friendly."
  },
  {
    q: "Which software development methodology involves iterative development cycles called sprints?",
    options: ["Waterfall model", "Agile methodology", "Spiral model", "V-model"],
    answer: 1,
    explanation: "Agile methodology uses sprints to develop small increments iteratively."
  },
  {
    q: "What is the primary purpose of code refactoring?",
    options: ["Add new features", "Optimize performance", "Improve readability and maintainability", "Fix defects"],
    answer: 2,
    explanation: "Code refactoring improves readability and maintainability without changing external behavior."
  },
  {
    q: "Which software development approach focuses on involving end-users through continuous feedback and collaboration?",
    options: ["Waterfall model", "Agile methodology", "Spiral model", "V-model"],
    answer: 1,
    explanation: "Agile methodology involves end-users via continuous feedback and collaboration."
  },
  {
    q: "Which type of testing involves running the entire software system in an environment similar to production?",
    options: ["Unit testing", "Integration testing", "System testing", "Regression testing"],
    answer: 2,
    explanation: "System testing verifies that all components work together in an environment close to production."
  },
  {
    q: "What is a use case in use case modeling?",
    options: ["Description of UI design", "Procedure for software installation", "Sequence of activities performed by a user or system", "Diagram of component relationships"],
    answer: 2,
    explanation: "A use case represents a sequence of activities performed to achieve a specific goal."
  },
  {
    q: "What is an actor in use case modeling?",
    options: ["A component performing actions", "A person or system interacting with the system", "A diagram of activities", "A user role description"],
    answer: 1,
    explanation: "An actor represents a person or system that interacts with the software system."
  },
  {
    q: "What is the purpose of an include relationship between use cases?",
    options: ["Reuse common steps", "Optional steps", "Extend a use case with additional steps", "Relationship between actors and use cases"],
    answer: 0,
    explanation: "Include relationships represent reuse of common steps between use cases."
  },
  {
    q: "What is the purpose of an extend relationship between use cases?",
    options: ["Reuse common steps", "Optional steps", "Extend a use case with additional steps", "Relationship between actors and use cases"],
    answer: 2,
    explanation: "Extend relationships represent optional extensions to a base use case."
  },
  {
    q: "Which diagram is commonly used to visualize the relationships between actors and use cases in use case modeling?",
    options: ["Class diagram", "Use case diagram", "Activity diagram", "Sequence diagram"],
    answer: 1,
    explanation: "Use case diagrams visualize relationships between actors and use cases."
  },
  {
    q: "What is the purpose of an abstract use case?",
    options: ["Not fully defined use case", "Optional use case", "Cannot be accessed directly by actor", "Represents a use case reused by others"],
    answer: 3,
    explanation: "Abstract use cases represent functionality reused by other use cases."
  },
  {
    q: "What is the purpose of an exception flow in a use case?",
    options: ["Represents an error or exceptional situation", "Represents alternative path", "Represents termination", "Represents actor relationship"],
    answer: 0,
    explanation: "Exception flow describes how the system handles errors or exceptional situations."
  },
  {
    q: "What is the primary goal of use case modeling?",
    options: ["Define architecture", "Identify and document user requirements", "Design user interface", "Implement functionality"],
    answer: 1,
    explanation: "Use case modeling identifies and documents user requirements."
  },
  {
    q: "What is an alternative flow in a use case?",
    options: ["Flowchart of steps", "Parallel activities", "Different sequence based on conditions", "Relationship between use cases"],
    answer: 2,
    explanation: "Alternative flows represent different sequences of steps based on specific conditions."
  },
  {
    q: "What is the purpose of a use case diagram?",
    options: ["Describe behavior in detail", "Represent internal structure", "Visualize relationships between actors and use cases", "Represent flow of activities"],
    answer: 2,
    explanation: "A use case diagram visualizes the relationships between actors and use cases, providing a high-level overview of system functionality."
  }















],








"ADAMA":[



  {
    q: "What is the purpose of server-side scripting languages in web development?",
    options: [
      "To control the visual appearance of web pages",
      "To handle client-side interactivity",
      "To generate dynamic content and interact with databases",
      "To ensure secure data transmission over the web"
    ],
    answer: 2,
    explanation: "Server-side scripting languages are used to generate dynamic content, process form data, and interact with databases on the server side of web applications."
  },
  {
    q: "Which of the following is a server-side scripting language for Microsoft's ASP.NET framework?",
    options: ["Python", "Ruby", "C#", "Java"],
    answer: 2,
    explanation: "C# is a server-side scripting language used in Microsoft's ASP.NET framework for web development. It provides a powerful and flexible environment for building web applications."
  },
  {
    q: "Which client-side scripting language is supported by all modern web browsers?",
    options: ["HTML", "CSS", "JavaScript", "PHP"],
    answer: 2,
    explanation: "JavaScript is a client-side scripting language supported by all modern web browsers. It allows for interactivity and dynamic behavior on web pages."
  },
  {
    q: "What is the purpose of client-side scripting languages in web development?",
    options: [
      "To control the visual appearance of web pages",
      "To handle server-side processing and database interactions",
      "To generate dynamic content and interact with databases",
      "To add interactivity and dynamic behavior to web pages"
    ],
    answer: 3,
    explanation: "Client-side scripting languages are used to add interactivity and dynamic behavior to web pages. They run on the user's browser and allow for dynamic content manipulation."
  },
  {
    q: "Which client-side scripting language is primarily used for manipulating the Document Object Model (DOM) of a web page?",
    options: ["HTML", "CSS", "JavaScript", "PHP"],
    answer: 2,
    explanation: "JavaScript is primarily used for manipulating the Document Object Model (DOM) of a web page. It allows for dynamic updating, event handling, and interaction with page elements."
  },
  {
    q: "Which client-side scripting language is often used for validating form inputs on web pages?",
    options: ["HTML", "CSS", "JavaScript", "PHP"],
    answer: 2,
    explanation: "JavaScript is often used for validating form inputs on web pages. It allows for client-side validation, ensuring that user-entered data meets certain criteria before submitting the form."
  },
  {
    q: "Which client-side scripting technique allows for loading new content into a web page without a full page reload?",
    options: ["AJAX", "JSON", "XML", "Bootstrap"],
    answer: 0,
    explanation: "AJAX (Asynchronous JavaScript and XML) allows for loading new content into a web page without a full page reload. It enables asynchronous communication with the server and dynamic content updates."
  },
  {
    q: "Which client-side framework/library is commonly used for building responsive and interactive user interfaces?",
    options: ["jQuery", "React", "Angular", "Vue.js"],
    answer: 1,
    explanation: "React is a popular client-side JavaScript library for building responsive and interactive user interfaces. It follows a component-based approach and is widely used in web development."
  },
  {
    q: "Which technique is used to handle communication between a web browser and a server without interrupting the user's interaction with the web page?",
    options: ["AJAX", "JSON", "Websockets", "RESTful API"],
    answer: 2,
    explanation: "Websockets allow for bi-directional communication between a web browser and a server without interrupting the user's interaction with the web page. It enables real-time data exchange."
  },
  {
    q: "Which client-side technique is used to store data locally in a user's browser?",
    options: ["Cookies", "Local storage", "Session storage", "IndexedDB"],
    answer: 1,
    explanation: "Local storage is a client-side technique used to store data locally in a user's browser. It provides a larger storage capacity than cookies and can be accessed across multiple browser sessions."
  },

















  {
    q: "What is the primary markup language used for structuring content on the web?",
    options: ["HTML", "CSS", "JavaScript", "PHP"],
    answer: 0,
    explanation: "HTML (Hypertext Markup Language) is the primary markup language used for structuring content on the web. It defines the structure and layout of web pages."
  },
  {
    q: "What is the purpose of CSS in web development?",
    options: ["To define the structure and layout of web pages", "To add interactivity and dynamic behavior to web pages", "To control the visual appearance of web pages", "To handle server-side processing and database interactions"],
    answer: 2,
    explanation: "CSS (Cascading Style Sheets) is used to control the visual appearance of web pages, including elements such as colors, fonts, spacing, and layout."
  },
  {
    q: "Which programming language is primarily used for client-side scripting in web development?",
    options: ["HTML", "CSS", "JavaScript", "PHP"],
    answer: 2,
    explanation: "JavaScript is primarily used for client-side scripting in web development. It allows for dynamic and interactive behavior on web pages, such as form validation and DOM manipulation."
  },
  {
    q: "Which protocol is used for transferring data over the web?",
    options: ["HTTP", "FTP", "TCP/IP", "SMTP"],
    answer: 0,
    explanation: "HTTP (Hypertext Transfer Protocol) is the protocol used for transferring data over the web. It enables communication between web servers and web clients (browsers)."
  },
  {
    q: "What is the purpose of a web server in web development?",
    options: ["To store and manage website files", "To handle client-side scripting", "To control the visual appearance of web pages", "To ensure secure data transmission over the web"],
    answer: 0,
    explanation: "A web server is responsible for storing and managing website files. It responds to client requests, retrieves the requested files, and sends them back to the client's web browser."
  },
  {
    q: "Which of the following is a popular open-source database management system used in web development?",
    options: ["MySQL", "Oracle", "SQL Server", "MongoDB"],
    answer: 0,
    explanation: "MySQL is a popular open-source database management system used in web development. It is widely used for storing and retrieving data in web applications."
  },
  {
    q: "What is the purpose of a cookie in web development?",
    options: ["To store and retrieve user preferences and session information", "To control the visual appearance of web pages", "To handle client-side scripting", "To ensure secure data transmission over the web"],
    answer: 0,
    explanation: "Cookies are used in web development to store and retrieve user preferences and session information. They allow websites to remember user-specific data between different browsing sessions."
  },
  {
    q: "Which programming language is used for server-side scripting in web development?",
    options: ["HTML", "CSS", "JavaScript", "PHP"],
    answer: 3,
    explanation: "PHP (Hypertext Preprocessor) is a widely used programming language for server-side scripting in web development. It is embedded in HTML and allows for dynamic generation of web content."
  },
  {
    q: "What is the purpose of a framework in web development?",
    options: ["To ensure secure data transmission over the web", "To control the visual appearance of web pages", "To provide a foundation and structure for developing web applications", "To handle client-side scripting"],
    answer: 2,
    explanation: "A framework in web development provides a foundation and structure for developing web applications. It offers predefined libraries, tools, and conventions to simplify and accelerate development."
  },
  {
    q: "Which programming language is often used for building scalable and high-performance web applications?",
    options: ["HTML", "CSS", "JavaScript", "Node.js"],
    answer: 3,
    explanation: "Node.js is a JavaScript runtime environment that allows server-side execution of JavaScript code. It is often used for building scalable and high-performance web applications."
  },
  {
    q: "What is the purpose of AJAX in web development?",
    options: ["To control the visual appearance of web pages", "To handle client-side scripting", "To ensure secure data transmission over the web", "To enable asynchronous communication between the client and server"],
    answer: 3,
    explanation: "AJAX (Asynchronous JavaScript and XML) is used in web development to enable asynchronous communication between the client and server. It allows for updating parts of a web page without requiring a full page reload."
  },
  {
    q: "Which format is commonly used for data interchange between a web server and a web application?",
    options: ["HTML", "CSS", "JSON", "XML"],
    answer: 2,
    explanation: "JSON (JavaScript Object Notation) is a lightweight data interchange format commonly used for communication between a web server and a web application. It is easy to read and write for both humans and machines."
  },
  {
    q: "What is the purpose of a content management system (CMS) in web development?",
    options: ["To store and manage website files", "To control the visual appearance of web pages", "To handle client-side scripting", "To provide a user-friendly interface for managing website content"],
    answer: 3,
    explanation: "A content management system (CMS) is used in web development to provide a user-friendly interface for managing website content. It allows non-technical users to create, edit, and publish content without requiring programming knowledge."
  },
  {
    q: "Which technique is used to improve the performance of web applications by caching frequently accessed data or resources?",
    options: ["Compression", "Minification", "Caching", "Encryption"],
    answer: 2,
    explanation: "Caching is a technique used to improve the performance of web applications by storing and retrieving frequently accessed data or resources. It reduces the need to fetch data from the original source, thereby improving response times."
  },
  {
    q: "Which protocol is used for secure communication over the web?",
    options: ["HTTP", "FTP", "TCP/IP", "HTTPS"],
    answer: 3,
    explanation: "HTTPS (Hypertext Transfer Protocol Secure) is used for secure communication over the web. It encrypts the data exchanged between a web server and a web client, ensuring confidentiality and integrity."
  },
  {
    q: "What is the purpose of a RESTful API in web development?",
    options: ["To control the visual appearance of web pages", "To handle client-side scripting", "To ensure secure data transmission over the web", "To provide a standardized interface for accessing and manipulating web resources"],
    answer: 3,
    explanation: "A RESTful API (Representational State Transfer) is used in web development to provide a standardized interface for accessing and manipulating web resources. It allows clients to perform CRUD (Create, Read, Update, Delete) operations on resources using HTTP methods."
  },
  {
    q: "What is the purpose of responsive web design?",
    options: ["To control the visual appearance of web pages", "To handle client-side scripting", "To ensure secure data transmission over the web", "To create websites that adapt and display correctly on different devices and screen sizes"],
    answer: 3,
    explanation: "Responsive web design is an approach to create websites that adapt and display correctly on different devices and screen sizes. It ensures an optimal user experience by adjusting the layout and design based on the user's device."
  },
  {
    q: "What is the purpose of version control systems (VCS) in web development?",
    options: ["To control the visual appearance of web pages", "To handle client-side scripting", "To ensure secure data transmission over the web", "To track changes to source code and collaborate on web development projects"],
    answer: 3,
    explanation: "Version control systems (VCS) are used in web development to track changes to source code and collaborate on web development projects. They allow multiple developers to work on the same codebase, manage changes, and resolve conflicts."
  },
  {
    q: "Which web development concept refers to the practice of optimizing a website to rank higher in search engine results?",
    options: ["Accessibility", "Usability", "SEO (Search Engine Optimization)", "Performance optimization"],
    answer: 2,
    explanation: "SEO (Search Engine Optimization) refers to the practice of optimizing a website to rank higher in search engine results. It involves various techniques to improve the visibility and accessibility of a website to search engines."
  },
  {
    q: "Which technique is used to protect web applications against common security vulnerabilities, such as cross-site scripting (XSS) and SQL injection?",
    options: ["Encryption", "Authentication", "Authorization", "Web application security testing"],
    answer: 3,
    explanation: "Web application security testing is used to identify and protect web applications against common security vulnerabilities, such as cross-site scripting (XSS) and SQL injection. It involves various testing techniques to identify and fix potential security flaws."
  },
  {
    q: "Which server-side scripting language is commonly used for web development?",
    options: ["HTML", "CSS", "JavaScript", "PHP"],
    answer: 3,
    explanation: "PHP (Hypertext Preprocessor) is a popular server-side scripting language widely used for web development. It allows dynamic generation of web content and interacts with databases."
  },
  {
    q: "Which server-side scripting language is often used for building scalable and high-performance web applications?",
    options: ["HTML", "CSS", "JavaScript", "Node.js"],
    answer: 3,
    explanation: "Node.js is a server-side JavaScript runtime that enables building scalable and high-performance web applications. It utilizes an event-driven, non-blocking I/O model."
  }
  















],




"WSU1":[


  

{
  q: "In the CIA Triad, which one of the following is not involved?",
  options: ["Availability", "Confidentiality", "Authenticity", "Integrity"],
  answer: 2,
  explanation: "Authenticity is not part of the CIA triad; the triad includes Confidentiality, Integrity, and Availability."
},
{
  q: "If according to the hypothesis, the result should be positive, but in fact it is negative, then it is known as ___.",
  options: [
    "False Negative Hypothesis",
    "False Positive Hypothesis",
    "Specialized Hypothesis",
    "Consistent Hypothesis"
  ],
  answer: 1,
  explanation: "A false positive occurs when a test indicates a positive result incorrectly."
},
{
  q: "Which of the following function is used to set cookie in PHP?",
  options: ["createcookie()", "makecookie()", "setcookie()", "None of the above"],
  answer: 2,
  explanation: "setcookie() is the built-in PHP function used to create cookies."
},
{
  q: "Which of the following refers to stealing one's idea or invention of others and use it for their own benefits?",
  options: [
    "Piracy",
    "Plagiarism",
    "Intellectual property rights",
    "All of the above"
  ],
  answer: 3,
  explanation: "All the listed options relate to misuse or theft of intellectual work."
},
{
  q: "Bluetooth is an example of __.",
  options: [
    "Personal Area Network",
    "Local Area Network",
    "Virtual Private Network",
    "Wide Area Network"
  ],
  answer: 0,
  explanation: "Bluetooth operates within a short range, making it a PAN."
},
{
  q: "Which of the following command is a type of Data Definition Language command?",
  options: ["Create", "Update", "Delete", "Merge"],
  answer: 0,
  explanation: "CREATE is a DDL command used to define database structures."
},
{
  q: "An AI agent perceives and acts upon the environment using ___.",
  options: ["Sensors", "Perceiver", "Actuators", "Both a and c"],
  answer: 3,
  explanation: "AI agents use sensors to perceive and actuators to act."
},
{
  q: "Which of the following statement(s) about stack data structure is/are NOT correct?",
  options: [
    "Linked List are used for implementing Stacks",
    "Top of the Stack always contain the new node",
    "Stack is the FIFO data structure",
    "Null link is present in the last node at the bottom of the stack"
  ],
  answer: 2,
  explanation: "Stack follows LIFO, not FIFO."
},
{
  q: "Given pointer to a node X in a singly linked list. Only one pointer is given, pointer to head node is not given, can we delete the node X?",
  options: [
    "Possible if X is not last node",
    "Possible if X is not first node",
    "Possible if size of linked list is even",
    "Possible if size of linked list is odd"
  ],
  answer: 0,
  explanation: "Deletion is possible by copying data from the next node if X is not the last node."
},
{
  q: "Which of the following is the task of lexical analysis?",
  options: [
    "To build the uniform symbol table",
    "To initialize the variables",
    "To organize the variables in a lexical order",
    "None of the mentioned"
  ],
  answer: 0,
  explanation: "Lexical analysis builds and maintains the symbol table."
},
{
  q: "What is encapsulation in object oriented programming?",
  options: [
    "Combining data members and member functions that operate on them into a single unit",
    "Combining data members and member functions into a single unit which can operate on any data",
    "Combining various data members into a single unit",
    "Combining various member functions into a single unit"
  ],
  answer: 0,
  explanation: "Encapsulation binds data and methods that operate on that data together."
},
{
  q: "Which of the following is generally used for performing tasks like creating the structure of relations, deleting relation?",
  options: [
    "DML (Data Manipulation Language)",
    "Query",
    "Relational Schema",
    "DDL (Data Definition Language)"
  ],
  answer: 3,
  explanation: "DDL is used to define and modify database structures."
},
{
  q: "Which one of the following data structures are preferred in database-system implementation?",
  options: ["AVL tree", "B-tree", "B+ tree", "Splay tree"],
  answer: 2,
  explanation: "B+ trees are efficient for disk-based storage systems."
},
{
  q: "Rows of a relation are known as the ___.",
  options: ["Degree", "Tuples", "Entity", "All of the above"],
  answer: 3,
  explanation: "Rows can be referred to as tuples or entities depending on context."
},
{
  q: "___ is the maximum amount of time an algorithm takes to execute a specific set of inputs.",
  options: [
    "Running time",
    "Average case time complexity",
    "Worst case time complexity",
    "Best case time complexity"
  ],
  answer: 2,
  explanation: "Worst-case time complexity defines the maximum execution time."
},
{
  q: "In which access should a constructor be defined, so that object of the class can be created in any function?",
  options: ["Any access specifier will work", "Private", "Public", "Protected"],
  answer: 2,
  explanation: "Constructors must be public to allow object creation."
},
{
  q: "It can be a software program or a hardware device that filters all data packets coming through the internet or network. It is known as ___.",
  options: ["Antivirus", "Firewall", "Cookies", "Malware"],
  answer: 1,
  explanation: "A firewall monitors and filters network traffic."
},
{
  q: "The minimum number of transitions to reach the final state for the regular expression {a,b}*{baaa} is:",
  options: ["4", "5", "6", "3"],
  answer: 0,
  explanation: "The string 'baaa' requires 4 transitions."
},
{
  q: "Linked list is considered as an example of ___ type of memory allocation.",
  options: ["Dynamic", "Static", "Compile time", "Heap"],
  answer: 0,
  explanation: "Linked lists use dynamic memory allocation."
},
{
  q: "In computer network nodes are _____.",
  options: [
    "The computer that originates the data",
    "The computer that routes the data",
    "The computer that terminates the data",
    "All of the mentioned"
  ],
  answer: 3,
  explanation: "All devices participating in communication are considered nodes."
},
{
  q: "In the case of Zero-address instruction method the operands are stored in _.",
  options: ["Registers", "Accumulators", "Push down stack", "Cache memory"],
  answer: 2,
  explanation: "Zero-address instructions use a stack to store operands."
},
{
  q: "Which of the following statements is not true?",
  options: [
    "Every language defined by any automata is also defined by a regular expression",
    "Every language defined by a regular expression can be represented using a DFA",
    "Every language defined by a regular expression can be represented using NFA with ε-moves",
    "Regular expression is just another representation for automata definition"
  ],
  answer: 1,
  explanation: "Not all regular expressions can be directly represented as DFA without conversion."
},
{
  q: "Which of the following can be used to extract or filter the data and information from the data warehouse?",
  options: [
    "Data redundancy",
    "Data recovery tool",
    "Data mining",
    "Data inconsistency"
  ],
  answer: 2,
  explanation: "Data mining is used to extract useful patterns and information."
},




  
{
  q: "In the CIA Triad, which one of the following is not involved?",
  options: [
    "Availability",
    "Confidentiality",
    "Authenticity",
    "Integrity"
  ],
  answer: 2,
  explanation: "The CIA triad consists of Confidentiality, Integrity, and Availability. Authenticity is not part of it."
},
{
  q: "If according to the hypothesis the result should be positive, but in fact it is negative, then it is known as ___",
  options: [
    "False Negative Hypothesis",
    "False Positive Hypothesis",
    "Specialized Hypothesis",
    "Consistent Hypothesis"
  ],
  answer: 1,
  explanation: "A false positive occurs when the hypothesis predicts a positive result but the actual result is negative."
},
{
  q: "Which of the following function is used to set cookie in PHP?",
  options: [
    "createcookie()",
    "makecookie()",
    "setcookie()",
    "None of the above"
  ],
  answer: 2,
  explanation: "PHP uses the setcookie() function to create or modify cookies."
},
{
  q: "Which of the following refers to stealing one's idea or invention of others and use it for their own benefits?",
  options: [
    "Piracy",
    "Plagiarism",
    "Intellectual property rights",
    "All of the above"
  ],
  answer: 3,
  explanation: "Piracy, plagiarism, and violation of intellectual property rights all involve misuse of others’ work."
},
{
  q: "Bluetooth is an example of __",
  options: [
    "Personal Area Network",
    "Local Area Network",
    "Virtual Private Network",
    "Wide Area Network"
  ],
  answer: 0,
  explanation: "Bluetooth is used for short-range communication, which is classified as a Personal Area Network (PAN)."
},
{
  q: "Which of the following command is a type of Data Definition Language (DDL) command?",
  options: [
    "Create",
    "Update",
    "Delete",
    "Merge"
  ],
  answer: 0,
  explanation: "CREATE is a DDL command used to define database structures."
},
{
  q: "An AI agent perceives and acts upon the environment using ___",
  options: [
    "Sensors",
    "Perceiver",
    "Actuators",
    "Both a and c"
  ],
  answer: 3,
  explanation: "AI agents use sensors to perceive the environment and actuators to act upon it."
},
{
  q: "Which of the following statement(s) about stack data structure is NOT correct?",
  options: [
    "Linked lists are used for implementing stacks",
    "Top of the stack always contains the new node",
    "Stack is the FIFO data structure",
    "Null link is present in the last node at the bottom of the stack"
  ],
  answer: 2,
  explanation: "Stack follows LIFO (Last In First Out), not FIFO."
},
{
  q: "Given a pointer to a node X in a singly linked list (head pointer not given), can we delete node X?",
  options: [
    "Possible if X is not last node",
    "Possible if X is not first node",
    "Possible if size of linked list is even",
    "Possible if size of linked list is odd"
  ],
  answer: 0,
  explanation: "A node can be deleted if it is not the last node by copying data from the next node."
},
{
  q: "Which of the following is the task of lexical analysis?",
  options: [
    "To build the uniform symbol table",
    "To initialize the variables",
    "To organize the variables in a lexical order",
    "None of the mentioned"
  ],
  answer: 0,
  explanation: "Lexical analysis identifies tokens and builds the symbol table."
},
{
  q: "What is encapsulation in Object Oriented Programming?",
  options: [
    "Combining data members and member functions into a single unit",
    "Combining data members and member functions into a single unit which can operate on any data",
    "Combining various data members into a single unit",
    "None of the above"
  ],
  answer: 0,
  explanation: "Encapsulation bundles data and the methods that operate on that data into a single unit (class)."
},



 {
  q: "What will be the output of the following PHP program?\n$a = 15;\nfunction show() {\n  $a = 20;\n  echo \"$a\";\n}\nshow();\necho \"$a\";",
  options: [
    "2015",
    "2020",
    "1515",
    "0"
  ],
  answer: 0,
  explanation: "The function prints its local variable (20), then the global variable prints 15, resulting in 2015."
},
{
  q: "The architecture of a database can be viewed as the ____.",
  options: [
    "One level",
    "Two-level",
    "Three-level",
    "Four level"
  ],
  answer: 2,
  explanation: "Database architecture follows the three-level architecture: internal, conceptual, and external."
},
{
  q: "If an infinite language is passed to Machine M, the subsidiary which gives a finite solution to the infinite input tape is ______.",
  options: [
    "Compiler",
    "Interpreter",
    "Loader and Linkers",
    "None of the mentioned"
  ],
  answer: 0,
  explanation: "A compiler translates the entire program and produces a finite output."
},
{
  q: "First order logic statements contain __.",
  options: [
    "Predicate and Preposition",
    "Subject and an Object",
    "Predicate and Subject",
    "None of the above"
  ],
  answer: 2,
  explanation: "First-order logic statements consist of predicates applied to subjects."
},
{
  q: "Which of the following is used to predict the effort as a function of LOC or FP?",
  options: [
    "COCOMO",
    "FP-based estimation",
    "Both COCOMO and FP-based estimation",
    "Process-based estimation"
  ],
  answer: 2,
  explanation: "Effort estimation can be done using both COCOMO (LOC-based) and FP-based models."
},
{
  q: "Which among the following does not come under OOP concept?",
  options: [
    "Data hiding",
    "Message passing",
    "Platform independent",
    "Data binding"
  ],
  answer: 2,
  explanation: "Platform independence is a language feature, not an OOP concept."
},
{
  q: "Auxiliary memory can be defined as:",
  options: [
    "A memory unit that directly communicates with CPU",
    "A device that provides backup storage",
    "It is the fastest memory",
    "All of the above"
  ],
  answer: 1,
  explanation: "Auxiliary memory refers to secondary storage used for backup and long-term data storage."
},
{
  q: "Maximum number of elements in the array declaration int x[5][8]; is",
  options: [
    "28",
    "40",
    "32",
    "13"
  ],
  answer: 1,
  explanation: "Total elements = 5 × 8 = 40."
},
{
  q: "The portion of the process scheduler in an operating system that dispatches processes is concerned with ____.",
  options: [
    "Assigning ready processes to waiting queue",
    "Assigning running processes to blocked queue",
    "Assigning ready processes to CPU",
    "All of the mentioned"
  ],
  answer: 2,
  explanation: "The dispatcher assigns ready processes to the CPU."
},
{
  q: "What will be the output of the following PHP program?\n$var1 = \"Hello\";\n$var2 = \"World\";\necho $var1, $var2;",
  options: [
    "HelloWorld",
    "Hello, World",
    "Hello World",
    "None of the given choices"
  ],
  answer: 0,
  explanation: "PHP echo with comma prints strings without adding space."
},
{
  q: "Which of the following HTML attribute is used to define inline styles?",
  options: [
    "Style",
    "Type",
    "Class",
    "None of the above"
  ],
  answer: 0,
  explanation: "The style attribute is used for inline CSS."
},
{
  q: "Function prototyping is used to",
  options: [
    "Introduce the function",
    "Describe type of arguments",
    "Describe the return value only",
    "Describe the parameters"
  ],
  answer: 0,
  explanation: "Function prototyping introduces the function before its actual definition."
},
{
  q: "Which one of the following is commonly used to define the overall design of the database?",
  options: [
    "Application program",
    "Data definition language",
    "Schema",
    "Data manipulation language"
  ],
  answer: 2,
  explanation: "A database schema defines the overall logical structure of the database."
},
 

  
{
  q: "The recursive versions of binary search use a ___ structure.",
  options: [
    "Branch and bound",
    "Dynamic programming",
    "Divide and conquer",
    "Simple recursive"
  ],
  answer: 2,
  explanation: "Binary search repeatedly divides the problem into smaller subproblems, which is the divide and conquer approach."
},
{
  q: "In Operating Systems, which of the following is/are CPU scheduling algorithms?",
  options: [
    "Priority",
    "Round Robin",
    "Shortest Job First",
    "All of the mentioned"
  ],
  answer: 3,
  explanation: "Priority, Round Robin, and Shortest Job First are all CPU scheduling algorithms."
},
{
  q: "A deadlock avoidance algorithm dynamically examines the __ to ensure that a circular wait condition can never exist.",
  options: [
    "Resources",
    "Operating system",
    "System storage state",
    "Resource allocation state"
  ],
  answer: 3,
  explanation: "Deadlock avoidance checks the current resource allocation state before granting requests."
},
{
  q: "The main memory accommodates ____.",
  options: [
    "CPU",
    "User processes",
    "Operating system",
    "All of the mentioned"
  ],
  answer: 2,
  explanation: "The operating system must reside in main memory to manage system resources."
},
{
  q: "Which feature of OOP indicates code reusability?",
  options: [
    "Abstraction",
    "Polymorphism",
    "Encapsulation",
    "Inheritance"
  ],
  answer: 3, 
  explanation: "Inheritance allows reuse of existing code by deriving new classes."
},
{
  q: "In order to ensure the security of the data/information, we need to ____ the data.",
  options: [
    "Encrypt",
    "Decrypt",
    "Delete",
    "None of the above"
  ],
  answer: 0,
  explanation: "Encryption protects data from unauthorized access."
},
{
  q: "Which one of the following is not true?",
  options: [
    "Kernel remains in memory during the entire computer session",
    "Kernel is made of various modules which cannot be loaded in a running operating system",
    "Kernel is the first part of the operating system to load into memory during booting",
    "Kernel is the program that constitutes the central core of the operating system"
  ],
  answer: 1,
  explanation: "Modern kernels support loadable modules during runtime."
},
{
  q: "In Wi-Fi Security, which of the following protocol is more used?",
  options: [
    "WPA",
    "WPA2",
    "WPS",
    "Both A and C"
  ],
  answer: 1,
  explanation: "WPA2 is the most widely used and secure Wi-Fi security protocol."
},
{
  q: "If a process fails, most operating systems write the error information to a __.",
  options: [
    "New file",
    "Another running process",
    "Log file",
    "None of the mentioned"
  ],
  answer: 2,
  explanation: "Operating systems record error details in log files."
},
{
  q: "Which one of the following errors will be handled by the operating system?",
  options: [
    "Lack of paper in printer",
    "Power failure",
    "Connection failure in the network",
    "All of the mentioned"
  ],
  answer: 3,
  explanation: "The operating system handles hardware, power, and network-related errors."
},
{
  q: "Which of the following statements for a simple graph is correct?",
  options: [
    "Every path is a trail",
    "Every trail is a path",
    "Every trail is a path as well as every path is a trail",
    "Path and trail have no relation"
  ],
  answer: 0,
  explanation: "A path is a trail with no repeated vertices, so every path is a trail."
},
{
  q: "The string function strcpy",
  options: [
    "Concatenates two strings",
    "Copies one string over the other",
    "Compares two strings",
    "Finds the length of a string"
  ],
  answer: 1,
  explanation: "strcpy copies the contents of one string into another."
},
{
  q: "The agile software development model is built based on __.",
  options: [
    "Linear development",
    "Incremental development",
    "Iterative development",
    "Both incremental and iterative development"
  ],
  answer: 3,
  explanation: "Agile follows both incremental and iterative development approaches."
},



  
{
  q: "Function of central processing unit is/are:",
  options: [
    "Detecting any errors",
    "Interpreting and executing machine level instructions",
    "Controlling data transfer",
    "All"
  ],
  answer: 3,
  explanation: "The CPU interprets and executes instructions, controls data flow, and manages processing tasks."
},
{
  q: "The operating system is responsible for:",
  options: [
    "Bad-block recovery",
    "Booting from disk",
    "Disk initialization",
    "All of the mentioned"
  ],
  answer: 3,
  explanation: "The operating system manages booting, disk initialization, and bad-block recovery."
},
{
  q: "What kind of linked list is best to answer questions like “What is the item at position n?”",
  options: [
    "Singly linked list",
    "Doubly linked list",
    "Circular linked list",
    "Array implementation of linked list"
  ],
  answer: 3,
  explanation: "Array implementation allows direct indexed access, making position-based queries efficient."
},
{
  q: "Which of the following layers is an addition to OSI model when compared with TCP/IP model?",
  options: [
    "Application layer",
    "Presentation layer",
    "Session layer",
    "Session and Presentation layer"
  ],
  answer: 3,
  explanation: "The OSI model includes Session and Presentation layers that are not separate in TCP/IP."
},
{
  q: "Lexemes can be referred to as:",
  options: [
    "Elements of lexicography",
    "Sequence of alphanumeric characters in a token",
    "Lexical errors",
    "None of the mentioned"
  ],
  answer: 1,
  explanation: "A lexeme is the sequence of characters that forms a token."
},
{
  q: "Which method of the Class.class is used to determine the name of a class represented by the class object as a String?",
  options: [
    "getClass()",
    "intern()",
    "getName()",
    "toString()"
  ],
  answer: 2,
  explanation: "The getName() method returns the class name as a String."
},
{
  q: "The ___ model helps in representing the system's dynamic behavior.",
  options: [
    "Object Model",
    "Context Model",
    "Behavioral Model",
    "Data Model"
  ],
  answer: 2,
  explanation: "Behavioral models describe how a system behaves over time."
},
{
  q: "Which of the following commands is used to save any transaction permanently into the database?",
  options: [
    "Commit",
    "Rollback",
    "Savepoint",
    "None of the above"
  ],
  answer: 0,
  explanation: "COMMIT permanently saves all changes made during the transaction."
},
{
  q: "Which type of shift instruction is used to divide a signed number by two?",
  options: [
    "Logical right shift",
    "Arithmetic right shift",
    "Logical left shift",
    "Arithmetic left shift"
  ],
  answer: 1,
  explanation: "Arithmetic right shift preserves the sign bit while dividing by two."
},
{
  q: "Which of the following word correctly summarizes the importance of software design?",
  options: [
    "Quality",
    "Complexity",
    "Efficiency",
    "Accuracy"
  ],
  answer: 0,
  explanation: "Good software design directly impacts overall software quality."
},
{
  q: "What is the result of the following Java program?",
  options: [
    "It prints A and B with a delay",
    "It only prints A and exits",
    "It only prints B and exits",
    "A will be printed, and then an exception is thrown"
  ],
  answer: 3,
  explanation: "Calling wait() without owning the monitor causes IllegalMonitorStateException after printing A."
},
{
  q: "To obtain a prefix expression, which of the tree traversals is used?",
  options: [
    "Level-order traversal",
    "Pre-order traversal",
    "Post-order traversal",
    "In-order traversal"
  ],
  answer: 1,
  explanation: "Prefix expressions are obtained using pre-order traversal."
},
{
  q: "RR* can be expressed in which of the forms:",
  options: [
    "R+",
    "R-",
    "R+ ∪ R-",
    "R"
  ],
  answer: 0,
  explanation: "RR* represents one or more occurrences of R, which is R+."
},






  

{
  q: "The output of the lexical and syntax analyzer can be stated as:",
  options: [
    "parse stream, parse tree",
    "token tree, parse tree",
    "token stream, parse tree",
    "all of the mentioned"
  ],
  answer: 2,
  explanation: "Lexical analysis produces a token stream, and syntax analysis produces a parse tree."
},
{
  q: "Which AI technique enables computers to understand the associations and relationships between objects and events?",
  options: [
    "Heuristic Processing",
    "Cognitive Science",
    "Relative Symbolism",
    "Pattern Matching"
  ],
  answer: 3,
  explanation: "Pattern matching helps AI recognize relationships and associations between objects and events."
},
{
  q: "For an effective operating system, when should deadlock be checked?",
  options: [
    "Every time a resource request is made at fixed time intervals",
    "At fixed time intervals",
    "Every time a resource request is made",
    "None of the mentioned"
  ],
  answer: 0,
  explanation: "Deadlock detection is typically performed at fixed intervals or during resource requests."
},
{
  q: "Linked lists are not suitable for the implementation of:",
  options: [
    "Insertion sort",
    "Radix sort",
    "Polynomial manipulation",
    "Binary search"
  ],
  answer: 3,
  explanation: "Binary search requires random access, which linked lists do not support."
},
{
  q: "Which of the following is the container for <tr>, <th>, and <td>?",
  options: [
    "<data>",
    "<table>",
    "<group>",
    "All of the above"
  ],
  answer: 1,
  explanation: "<table> is the main container element for table rows and cells in HTML."
},
{
  q: "Which of the following statement is false?",
  options: [
    "Context free language is the subset of context sensitive language",
    "Regular language is the subset of context sensitive language",
    "Recursively enumerable language is the super set of regular language",
    "Context sensitive language is a subset of context free language"
  ],
  answer: 3,
  explanation: "Context-sensitive languages are more powerful than context-free languages, not subsets."
},
{
  q: "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
  options: [
    "Insertion Sort",
    "Merge Sort",
    "Quick Sort",
    "Heap Sort"
  ],
  answer: 1,
  explanation: "Merge sort is efficient for linked lists and works in O(n log n) time."
},
{
  q: "Communication channel is shared by all the machines on the network in:",
  options: [
    "Broadcast network",
    "Unicast network",
    "Multicast network",
    "Anycast network"
  ],
  answer: 0,
  explanation: "In a broadcast network, the communication channel is shared by all nodes."
},
{
  q: "What is the number of edges present in a complete graph having n vertices?",
  options: [
    "(n*(n+1))/2",
    "(n*(n-1))/2",
    "n",
    "Information given is insufficient"
  ],
  answer: 1,
  explanation: "A complete graph has n(n−1)/2 edges."
},
{
  q: "Network congestion occurs:",
  options: [
    "In case of traffic overloading",
    "When a system terminates",
    "When connection between two nodes terminates",
    "In case of transfer failure"
  ],
  answer: 0,
  explanation: "Network congestion happens when too much traffic overloads the network."
},
{
  q: "Which of the following is an incorrect activity for the configuration management of a software system?",
  options: [
    "Change management",
    "System management",
    "Internship management",
    "Version management"
  ],
  answer: 2,
  explanation: "Internship management is unrelated to software configuration management."
},







  

  {
    q: "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
    options: [
      "Merge Sort",
      "Heap Sort",
      "Quick Sort",
      "Insertion Sort"
    ],
    answer: 0,
    explanation: "Merge Sort works efficiently on linked lists and guarantees O(n log n) time complexity."
  },
  {
    q: "Which combinational circuit receives 2^n input and directs it to a single output line?",
    options: [
      "Decoder",
      "Encoder",
      "Multiplexer",
      "Flip flop"
    ],
    answer: 2,
    explanation: "A multiplexer selects one of many inputs and forwards it to a single output line."
  },
  {
    q: "Maximum number of elements in the array declaration int x[5][8]; is",
    options: [
      "40",
      "28",
      "13"
    ],
    answer: 0,
    explanation: "Total elements = rows × columns = 5 × 8 = 40."
  },
  {
    q: "The total number of states required to automate the given regular expression (00)*(11)* is",
    options: [
      "3",
      "5",
      "4",
      "6"
    ],
    answer: 1,
    explanation: "The minimal DFA for (00)*(11)* requires 5 states."
  },
  {
    q: "First order logic statements contain:",
    options: [
      "Predicate and Preposition",
      "Subject and an Object",
      "Predicate and Subject",
      "None of the above"
    ],
    answer: 2,
    explanation: "First order logic statements consist of a subject and a predicate."
  },
  {
    q: "A language can be generated from simple primitive language in a simple way if and only if",
    options: [
      "It is recognized by a device of infinite states",
      "It takes no auxiliary memory",
      "All of the mentioned",
      "None of the mentioned"
    ],
    answer: 1,
    explanation: "Languages generated simply from primitive languages require no auxiliary memory."
  },
  {
    q: "Which of the following is used to display the output in PHP?",
    options: [
      "Echo",
      "Write",
      "Print",
      "Both (a) and (c)"
    ],
    answer: 3,
    explanation: "Both echo and print are used to display output in PHP."
  },
  {
    q: "In order to ensure the security of the data/information, we need to ____ the data:",
    options: [
      "Encrypt",
      "Decrypt",
      "Delete",
      "None of the above"
    ],
    answer: 0,
    explanation: "Encryption protects data from unauthorized access."
  },
  {
    q: "Which of the following is not a type of database?",
    options: [
      "Decentralized",
      "Distributed",
      "Hierarchical",
      "Network"
    ],
    answer: 0,
    explanation: "Decentralized is not considered a standard database type."
  },
  {
    q: "Which of the following statements is false?",
    options: [
      "Regular language is the subset of context sensitive language",
      "Context sensitive language is a subset of context free language",
      "Context free language is the subset of context sensitive language",
      "Recursively enumerable language is the super set of regular language"
    ],
    answer: 1,
    explanation: "Context-sensitive languages are more powerful than context-free languages, not a subset."
  },
  {
    q: "Which of the following statements is not true?",
    options: [
      "Every language defined by a regular expression can be represented using a DFA",
      "Regular expression is just another representation for any automata definition",
      "Every language defined by a regular expression can be represented using NFA with ε-moves",
      "Every language defined by any of the automata is also defined by a regular expression"
    ],
    answer: 0,
    explanation: "Some regular expressions require conversion steps and are not directly represented as DFA."
  },
  {
    q: "Which AI technique enables computers to understand associations and relationships between objects and events?",
    options: [
      "Heuristic Processing",
      "Relative Symbolism",
      "Cognitive Science",
      "Pattern Matching"
    ],
    answer: 3,
    explanation: "Pattern matching helps AI identify relationships and associations."
  },
  {
    q: "Which of the following words correctly summarizes the importance of software design?",
    options: [
      "Efficiency",
      "Quality",
      "Complexity",
      "Accuracy"
    ],
    answer: 1,
    explanation: "Good software design ensures overall quality, maintainability, and scalability."
  },
  {
    q: "Function prototyping is used to:",
    options: [
      "Describe the return value only",
      "Describe the parameters",
      "Introduce the function"
    ],
    answer: 1,
    explanation: "Function prototyping defines the function signature, including parameters and return type."
  },





  {
  q: "What does PEAS stand for in Artificial Intelligence?",
  options: [
    "Peer, Environment, Actuators, Sense",
    "Performance, Environment, Actuators, Sensors",
    "Perceiving, Environment, Actuators, Sensors",
    "None of the above"
  ],
  answer: 1,
  explanation: "PEAS stands for Performance, Environment, Actuators, and Sensors."
},
{
  q: "Which of the following is used in application programs to request data from the database management system?",
  options: [
    "Data Manipulation Language",
    "Data Definition Language",
    "Data Control Language",
    "All of the above"
  ],
  answer: 0,
  explanation: "DML is used to retrieve, insert, update, and delete data in a database."
},
{
  q: "Which of the following is the task of lexical analysis?",
  options: [
    "To build the uniform symbol table",
    "To initialize the variables",
    "To organize the variables in a lexical order",
    "None of the mentioned"
  ],
  answer: 0,
  explanation: "Lexical analysis builds the symbol table by identifying tokens."
},
{
  q: "Which of the following is the correct way to create an array in PHP?",
  options: [
    '$season = array["summer", "winter", "spring", "autumn"];',
    '$season = array("summer", "winter", "spring", "autumn");',
    '$season = "summer", "winter", "spring", "autumn";',
    "All of the above"
  ],
  answer: 1,
  explanation: "In PHP, arrays are created using array() with parentheses."
},
{
  q: "It can be a software program or a hardware device that filters all data packets coming through the internet or a network. It is known as:",
  options: [
    "Firewall",
    "Cookies",
    "Malware",
    "Antivirus"
  ],
  answer: 0,
  explanation: "A firewall monitors and controls incoming and outgoing network traffic."
},
{
  q: "Which one of the following can be considered as a class of computer threats?",
  options: [
    "DoS Attack",
    "Phishing",
    "Soliciting",
    "Both A and C"
  ],
  answer: 0,
  explanation: "A Denial of Service (DoS) attack is a well-known computer threat."
},
{
  q: "To access the services of the operating system, the interface is provided by the:",
  options: [
    "API",
    "System calls",
    "Library",
    "Assembly instructions"
  ],
  answer: 1,
  explanation: "System calls provide an interface between user programs and the OS."
},
{
  q: "What is a database?",
  options: [
    "Collection of data without organizing",
    "Organized collection of information that cannot be accessed or updated",
    "Organized collection of data that cannot be updated",
    "Organized collection of data or information that can be accessed, updated, and managed"
  ],
  answer: 3,
  explanation: "A database is an organized collection of data that can be accessed, updated, and managed."
},
{
  q: "To obtain a prefix expression, which tree traversal is used?",
  options: [
    "Pre-order traversal",
    "In-order traversal",
    "Post-order traversal",
    "Level-order traversal"
  ],
  answer: 0,
  explanation: "Pre-order traversal produces prefix notation."
},
{
  q: "Which of the following can be used to extract or filter data from a data warehouse?",
  options: [
    "Data redundancy",
    "Data recovery tool",
    "Data mining",
    "Both B and C"
  ],
  answer: 2,
  explanation: "Data mining is used to extract useful information from large datasets."
},
{
  q: "What will be the output of the following code segment?\nfor(int n=5; n>0; n--) {\n  cout << n;\n  if(n==3)\n    break;\n}",
  options: [
    "543",
    "54",
    "53",
    "5432"
  ],
  answer: 0,
  explanation: "The loop prints 5, 4, 3 and then breaks when n equals 3."
},
  








    

    ],






















    "2015":[
        { 
            q: "Which approach is commonly used for query processing in a distributed database system?", 
            options: ["Centralized query processing", "Distributed query processing", "Parallel query processing", "Sequential query processing"], 
            answer: 1, 
            explanation: "Distributed query processing involves distributing query execution across multiple sites."
        },
        { 
            q: "What is the role of a distributed transaction coordinator in a distributed database system?", 
            options: ["It ensures the consistency of data across all sites.", "It manages the distribution and retrieval of data across multiple sites.", "It controls the access permissions of users in the system.", "It handles the physical storage of data at each site."], 
            answer: 0, 
            explanation: "It ensures data consistency across all sites."
        },

{ 
        q: "What is the role of a distributed transaction coordinator in a distributed database system?", 
        options: ["It ensures the consistency of data across all sites.", "It manages the distribution and retrieval of data across multiple sites.", "It controls the access permissions of users in the system.", "It handles the physical storage of data at each site."], 
        answer: 0, 
        explanation: "It ensures data consistency across all sites."
    },
    { 
        q: "Which approach is commonly used for data replication in a distributed database system?", 
        options: ["Eager replication", "Lazy replication", "Snapshot replication", "Incremental replication"], 
        answer: 1, 
        explanation: "Lazy replication replicates data asynchronously to ensure consistency."
    },
    { 
        q: "What factor is important when evaluating query processing strategies?", 
        options: ["Cost of query execution", "Size of the database", "Network bandwidth", "Data replication"], 
        answer: 0, 
        explanation: "Cost of query execution is key for strategy evaluation."
    },
    { 
        q: "What is the purpose of query optimization?", 
        options: ["Ensure data consistency", "Minimize query execution time", "Maximize data replication", "Manage database security"], 
        answer: 1, 
        explanation: "Query optimization minimizes execution time via efficient plans."
    },
    { 
        q: "What is a query plan?", 
        options: ["Database schemas", "Query result", "Sequence of operations to execute a query", "Database indices"], 
        answer: 2, 
        explanation: "A query plan outlines the steps to execute a query."
    },
    { 
        q: "What is a cost model in query optimization?", 
        options: ["Statistical model of execution times", "Model for estimating query plan costs", "Model for analyzing schemas", "Statistical model for data distribution"], 
        answer: 1, 
        explanation: "A cost model estimates costs for different query plans."
    },
    { 
        q: "What is a join operation?", 
        options: ["Combine tuples from multiple tables", "Sort the query result", "Group query result", "Filter query result"], 
        answer: 0, 
        explanation: "A join combines tuples from multiple tables on a common attribute."
    },
    { 
        q: "Which index type is commonly used to speed up queries?", 
        options: ["B-tree", "Hash", "Bitmap", "Clustered"], 
        answer: 0, 
        explanation: "B-tree index allows efficient ordered data retrieval."
    },
    { 
        q: "What is query re-optimization?", 
        options: ["Re-execute query with different parameters", "Re-evaluate query cost with updated statistics", "Re-write query in different language", "Re-organize schema"], 
        answer: 1, 
        explanation: "Query re-optimization uses updated statistics to improve plans."
    },
    { 
        q: "What is query pipelining?", 
        options: ["Divide query into subqueries for parallel execution", "Execute stages sequentially", "Divide query into multiple queries", "Divide into multiple stages and execute concurrently"], 
        answer: 3, 
        explanation: "Query pipelining executes multiple stages concurrently."
    },
    { 
        q: "What is query caching?", 
        options: ["Store query results for reuse", "Store intermediate results", "Store metadata", "Store query plans"], 
        answer: 0, 
        explanation: "Caching stores results to speed up repeated queries."
    },
    { 
        q: "What is query parallelization?", 
        options: ["Divide query into subqueries for parallel execution", "Divide into stages sequentially", "Divide into multiple queries", "Divide stages concurrently"], 
        answer: 0, 
        explanation: "Parallelization executes independent subqueries in parallel."
    },
    { 
        q: "Which is NOT a programming paradigm?", 
        options: ["Procedural", "Object-oriented", "Functional", "Conditional"], 
        answer: 3, 
        explanation: "Conditional is a construct, not a programming paradigm."
    },
    { 
        q: "What is the purpose of a compiler?", 
        options: ["Execute programs", "Debug programs", "Translate source to machine code", "Optimize performance"], 
        answer: 2, 
        explanation: "Compilers translate human-readable code to machine code."
    },
    { 
        q: "Main advantage of high-level languages?", 
        options: ["Easier to read/write", "Faster than low-level", "Direct hardware control", "Platform-specific"], 
        answer: 0, 
        explanation: "High-level languages are closer to human language."
    },
    { 
        q: "Purpose of variable declaration?", 
        options: ["Assign value", "Create variable", "Specify type & name", "Check validity"], 
        answer: 2, 
        explanation: "Declaration specifies data type and variable name."
    },
    { 
        q: "Purpose of loops?", 
        options: ["Calculate", "Decision making", "Store data", "Repeat instructions"], 
        answer: 3, 
        explanation: "Loops repeat instructions multiple times efficiently."
    },
    { 
        q: "Difference between function and method?", 
        options: ["Functions procedural, methods OOP", "Functions return value, methods not", "Functions operate on data, methods on objects", "No difference"], 
        answer: 0, 
        explanation: "Functions are procedural, methods belong to objects in OOP."
    },
    { 
        q: "Which is an example of a NoSQL database?", 
        options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"], 
        answer: 2, 
        explanation: "MongoDB is a document-based NoSQL database."
    },
    { 
        q: "Primary key ensures?", 
        options: ["Unique row identification", "Fast queries", "Referential integrity", "Data replication"], 
        answer: 0, 
        explanation: "Primary key uniquely identifies table rows."
    },
    { 
        q: "ACID property of databases includes?", 
        options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Consistency, Integrity, Durability", "Atomicity, Control, Integrity, Data", "Access, Control, Isolation, Durability"], 
        answer: 0, 
        explanation: "ACID ensures reliable transaction processing."
    },
    { 
        q: "Which language is used for database queries?", 
        options: ["Python", "SQL", "Java", "HTML"], 
        answer: 1, 
        explanation: "SQL is used to query and manipulate databases."
    },
    { 
        q: "What is data normalization?", 
        options: ["Compress data", "Remove redundancy", "Encrypt data", "Index data"], 
        answer: 1, 
        explanation: "Normalization reduces redundancy and ensures consistency."
    },
    { 
        q: "What is a foreign key?", 
        options: ["Primary key in another table", "Unique key", "Index", "Constraint"], 
        answer: 0, 
        explanation: "Foreign key links to a primary key in another table."
    },
    { 
        q: "What is SQL JOIN used for?", 
        options: ["Combine rows from tables", "Sort data", "Filter rows", "Aggregate data"], 
        answer: 0, 
        explanation: "JOIN retrieves related data from multiple tables."
    },
    { 
        q: "Which is a cloud computing model?", 
        options: ["IaaS", "PaaS", "SaaS", "All of the above"], 
        answer: 3, 
        explanation: "All three are common cloud computing models."
    },
    { 
        q: "Which is an example of object-oriented language?", 
        options: ["C", "Python", "HTML", "SQL"], 
        answer: 1, 
        explanation: "Python supports object-oriented programming."
    },
    { 
        q: "What is recursion?", 
        options: ["Looping", "Function calling itself", "Sorting", "Conditional"], 
        answer: 1, 
        explanation: "Recursion is when a function calls itself."
    },
    { 
        q: "Which is a type of software testing?", 
        options: ["Unit test", "Integration test", "System test", "All of the above"], 
        answer: 3, 
        explanation: "All are software testing types."
    },
    { 
        q: "Which is a data structure?", 
        options: ["Array", "Function", "Method", "Compiler"], 
        answer: 0, 
        explanation: "Array is a fundamental data structure."
    },
    { 
        q: "Which is a linear data structure?", 
        options: ["Linked list", "Tree", "Graph", "Heap"], 
        answer: 0, 
        explanation: "Linked list is a linear data structure."
    },
    { 
        q: "Which is a non-linear data structure?", 
        options: ["Stack", "Queue", "Tree", "Array"], 
        answer: 2, 
        explanation: "Tree is a non-linear data structure."
    },
    { 
        q: "What is Big O notation used for?", 
        options: ["Measure space complexity", "Measure time complexity", "Measure code length", "Measure database size"], 
        answer: 1, 
        explanation: "Big O notation describes time complexity."
    },
    { 
        q: "Which is a type of sorting algorithm?", 
        options: ["Bubble sort", "Binary search", "DFS", "Hashing"], 
        answer: 0, 
        explanation: "Bubble sort is a common sorting algorithm."
    },
    { 
        q: "Which is a graph traversal algorithm?", 
        options: ["BFS", "Quick sort", "Merge sort", "Heap sort"], 
        answer: 0, 
        explanation: "BFS traverses a graph level by level."
    },
    { 
        q: "Which is a binary search tree property?", 
        options: ["Left < Root < Right", "Root < Left < Right", "Left > Root > Right", "No property"], 
        answer: 0, 
        explanation: "BST property ensures left < root < right for each node."
    },
    { 
        q: "What is the main function of OS?", 
        options: ["Manage resources", "Compile code", "Design database", "Test software"], 
        answer: 0, 
        explanation: "OS manages hardware and software resources."
    },
    { 
        q: "What is virtual memory?", 
        options: ["Memory on disk", "Memory on RAM", "Cache memory", "Register memory"], 
        answer: 0, 
        explanation: "Virtual memory uses disk space to extend RAM."
    },
    { 
        q: "What is deadlock in OS?", 
        options: ["Multiple processes blocked indefinitely", "Process finished", "Memory leak", "Infinite loop"], 
        answer: 0, 
        explanation: "Deadlock occurs when processes wait indefinitely for resources."
    },
    { 
        q: "What is a semaphore?", 
        options: ["Synchronization tool", "Variable type", "Function", "Compiler"], 
        answer: 0, 
        explanation: "Semaphores are used to control concurrent access."
    },
    { 
        q: "What is paging in memory management?", 
        options: ["Divide memory into pages", "Sort memory", "Allocate registers", "Compile memory"], 
        answer: 0, 
        explanation: "Paging divides memory into fixed-size blocks."
    },
    { 
        q: "What is a process in OS?", 
        options: ["Program in execution", "Function", "Class", "Method"], 
        answer: 0, 
        explanation: "A process is a program that is currently running."
    },
    { 
        q: "What is a thread?", 
        options: ["Lightweight process", "Heavyweight process", "Compiler instruction", "Memory block"], 
        answer: 0, 
        explanation: "A thread is a lightweight process within a process."
    },
    { 
        q: "What is context switching?", 
        options: ["Save/restore process state", "Change CPU clock", "Sort memory", "Terminate process"], 
        answer: 0, 
        explanation: "Context switching saves/restores process state during multitasking."
    },
    { 
        q: "What is a file system?", 
        options: ["Organize data on disk", "Process scheduling", "Memory management", "Database management"], 
        answer: 0, 
        explanation: "File system organizes and manages files on storage."
    },
    { 
        q: "Which is a network protocol?", 
        options: ["TCP/IP", "HTML", "CSS", "SQL"], 
        answer: 0, 
        explanation: "TCP/IP is a standard network protocol."
    },
    { 
        q: "What is the main function of DNS?", 
        options: ["Resolve domain names", "Store files", "Process images", "Compile code"], 
        answer: 0, 
        explanation: "DNS resolves human-readable domain names to IP addresses."
    },
    { 
        q: "What is HTTP used for?", 
        options: ["Web communication", "Database queries", "OS commands", "Compile code"], 
        answer: 0, 
        explanation: "HTTP is used for transferring web resources."
    },
    { 
        q: "What is HTTPS?", 
        options: ["Secure web communication", "Database query language", "Operating system", "Compiler"], 
        answer: 0, 
        explanation: "HTTPS secures communication between client and server."
    },
    { 
        q: "Which is a client-server model?", 
        options: ["Web browsing", "Database engine", "OS kernel", "Sorting algorithm"], 
        answer: 0, 
        explanation: "Web browsing uses the client-server model."
    },
    { 
        q: "What is load balancing?", 
        options: ["Distribute workload across servers", "Compile code", "Sort arrays", "Manage memory"], 
        answer: 0, 
        explanation: "Load balancing improves performance by distributing workload."
    },





    { 
        q: "What is the Single Responsibility Principle?", 
        options: ["Open/Closed Principle", "Liskov Substitution Principle", "Interface Segregation Principle", "Single Responsibility Principle"], 
        answer: 3, 
        explanation: "The SRP states that a component should have only one reason to change, i.e., a single well-defined responsibility."
    },
    { 
        q: "Which design pattern ensures only one instance of a class is created?", 
        options: ["Singleton pattern", "Factory pattern", "Observer pattern", "Decorator pattern"], 
        answer: 0, 
        explanation: "The Singleton pattern ensures only one instance of a class exists and provides a global access point."
    },
    { 
        q: "Which type of testing evaluates behavior under normal operating conditions?", 
        options: ["Stress testing", "Performance testing", "Functional testing", "Usability testing"], 
        answer: 2, 
        explanation: "Functional testing ensures the system functions as intended under normal conditions."
    },
    { 
        q: "Which programming paradigm avoids side effects and emphasizes data?", 
        options: ["Functional programming", "Procedural programming", "Object-oriented programming", "Event-driven programming"], 
        answer: 0, 
        explanation: "Functional programming uses immutable data and pure functions to avoid side effects."
    },
    { 
        q: "Which type of software maintenance adapts software to new environments?", 
        options: ["Corrective maintenance", "Adaptive maintenance", "Perfective maintenance", "Preventive maintenance"], 
        answer: 1, 
        explanation: "Adaptive maintenance modifies software to work in new environments or technologies."
    },
    { 
        q: "What is the purpose of usability testing?", 
        options: ["Evaluate performance under stress", "Assess user-friendliness", "Verify compliance with requirements", "Identify defects"], 
        answer: 1, 
        explanation: "Usability testing measures how user-friendly and easy-to-use the system is."
    },
    { 
        q: "Which software methodology uses iterative cycles called sprints?", 
        options: ["Waterfall model", "Agile methodology", "Spiral model", "V-model"], 
        answer: 1, 
        explanation: "Agile methodology uses sprints to iteratively develop and test small increments of software."
    },
    { 
        q: "Primary purpose of code refactoring?", 
        options: ["Add new features", "Optimize performance", "Improve readability & maintainability", "Fix defects"], 
        answer: 2, 
        explanation: "Refactoring improves code readability and maintainability without changing external behavior."
    },
    { 
        q: "Which approach involves continuous feedback and end-user involvement?", 
        options: ["Waterfall model", "Agile methodology", "Spiral model", "V-model"], 
        answer: 1, 
        explanation: "Agile methodology emphasizes customer collaboration and continuous feedback."
    },
    { 
        q: "Which testing runs the entire system in a near-production environment?", 
        options: ["Unit testing", "Integration testing", "System testing", "Regression testing"], 
        answer: 2, 
        explanation: "System testing validates the entire system in an environment similar to production."
    },
    { 
        q: "What is a use case?", 
        options: ["UI design description", "Installation procedure", "Sequence of activities by user/system", "Diagram of software components"], 
        answer: 2, 
        explanation: "A use case models a sequence of actions to achieve a specific goal."
    },
    { 
        q: "What is an actor in use case modeling?", 
        options: ["Component performing actions", "Person or system interacting", "Flow diagram", "User role description"], 
        answer: 1, 
        explanation: "An actor represents a user or system that interacts with the software."
    },
    { 
        q: "Purpose of include relationship in use cases?", 
        options: ["Reuse common steps", "Optional steps", "Extension with additional steps", "Actor-use case relationship"], 
        answer: 0, 
        explanation: "Include relationships represent reuse of common functionality between use cases."
    },
    { 
        q: "Purpose of extend relationship in use cases?", 
        options: ["Reuse common steps", "Optional steps", "Extend base use case with additional steps", "Actor-use case relationship"], 
        answer: 2, 
        explanation: "Extend relationships allow optional or additional steps to a base use case."
    },
    { 
        q: "Which diagram visualizes actors and use case relationships?", 
        options: ["Class diagram", "Use case diagram", "Activity diagram", "Sequence diagram"], 
        answer: 1, 
        explanation: "Use case diagrams show actors and their interactions with system use cases."
    },
    { 
        q: "Purpose of an abstract use case?", 
        options: ["Not fully defined", "Optional in system", "Cannot be accessed by actor", "Reused by other use cases"], 
        answer: 3, 
        explanation: "Abstract use cases capture common behavior reused by multiple use cases."
    },
    { 
        q: "Purpose of exception flow in use cases?", 
        options: ["Represent error situations", "Alternative path", "Termination", "Actor relationships"], 
        answer: 0, 
        explanation: "Exception flows describe how the system handles errors or exceptional situations."
    },
    { 
        q: "Primary goal of use case modeling?", 
        options: ["Define software architecture", "Identify & document requirements", "Design UI", "Implement functionality"], 
        answer: 1, 
        explanation: "Use case modeling documents user requirements and interactions."
    },
    { 
        q: "What is an alternative flow in use cases?", 
        options: ["Flowchart representation", "Parallel activities", "Different sequence based on conditions", "Actor relationships"], 
        answer: 2, 
        explanation: "Alternative flows show different sequences of steps based on conditions."
    },
    { 
        q: "Purpose of a use case diagram?", 
        options: ["Detail behavior", "Internal structure", "Show relationships between actors & use cases", "Activity flow"], 
        answer: 2, 
        explanation: "Use case diagrams visualize actors and their interactions with system use cases."
    }
    // Add remaining questions 21–50 following the same pattern...













        // Add all 103 questions for 2015 exam here in the same format...
    ],

"2015+1":[



  {
    q: "Which parsing technique uses left-to-right, leftmost derivation and is suitable for handling left-recursive grammar rules?",
    options: [
      "LL Parsing",
      "LR Parsing",
      "Recursive Descent Parsing",
      "Top-Down Parsing"
    ],
    answer: 0,
    explanation: "LL parsing uses a top-down approach and can handle left-factored grammars efficiently."
  },
  {
    q: "Which of the following is not a top-down parsing algorithm?",
    options: [
      "Recursive Descent Parsing",
      "LL Parsing",
      "Predictive Parsing",
      "LR Parsing"
    ],
    answer: 3,
    explanation: "LR parsing is a bottom-up parsing technique, unlike the other top-down algorithms."
  },
  {
    q: "Which parsing technique is more suitable for handling ambiguous grammars?",
    options: [
      "LL Parsing",
      "LR Parsing",
      "Recursive Descent Parsing",
      "Top-Down Parsing"
    ],
    answer: 1,
    explanation: "LR parsing can backtrack and explore multiple paths to resolve ambiguities."
  },
  {
    q: "What is the main goal of a compiler?",
    options: [
      "Execution of programs",
      "Translation of programs",
      "Optimization of programs",
      "Debugging of programs"
    ],
    answer: 1,
    explanation: "The main goal of a compiler is to translate source code into equivalent target code."
  },
  {
    q: "Which phase of the compiler analyzes the source code to identify the basic syntactic structures?",
    options: [
      "Lexical Analysis",
      "Syntax Analysis",
      "Semantic Analysis",
      "Code Generation"
    ],
    answer: 1,
    explanation: "Syntax analysis (parsing) checks if the code conforms to the grammar of the language."
  },
  {
    q: "Which phase of the compiler assigns meaning to syntactic structures and performs type checking?",
    options: [
      "Lexical Analysis",
      "Syntax Analysis",
      "Semantic Analysis",
      "Code Generation"
    ],
    answer: 2,
    explanation: "Semantic analysis assigns meaning to syntactic structures and performs type checking."
  },
  {
    q: "Which of the following represents the correct order of compiler phases?",
    options: [
      "Code Generation, Semantic Analysis, Lexical Analysis, Syntax Analysis",
      "Lexical Analysis, Syntax Analysis, Semantic Analysis, Code Generation",
      "Syntax Analysis, Lexical Analysis, Semantic Analysis, Code Generation",
      "Semantic Analysis, Syntax Analysis, Lexical Analysis, Code Generation"
    ],
    answer: 1,
    explanation: "Correct order: Lexical Analysis → Syntax Analysis → Semantic Analysis → Code Generation."
  },
  {
    q: "Which data structure is commonly used in symbol tables during the compilation process?",
    options: [
      "Stack",
      "Queue",
      "Hash Table",
      "Linked List"
    ],
    answer: 2,
    explanation: "Hash tables provide efficient lookup and retrieval of symbols."
  },
  {
    q: "Which phase of the compiler performs optimization techniques to improve efficiency of the generated code?",
    options: [
      "Lexical Analysis",
      "Syntax Analysis",
      "Semantic Analysis",
      "Code Optimization"
    ],
    answer: 3,
    explanation: "Code optimization eliminates redundant instructions, applies loop optimizations, etc."
  },
  {
    q: "Which of the following is not a typical optimization performed by a compiler?",
    options: [
      "Constant Folding",
      "Loop Unrolling",
      "Dead Code Elimination",
      "Syntax Analysis"
    ],
    answer: 3,
    explanation: "Syntax analysis is not an optimization; it analyzes the code's syntax."
  },
  {
    q: "Which phase of the compiler generates the target code?",
    options: [
      "Lexical Analysis",
      "Syntax Analysis",
      "Semantic Analysis",
      "Code Generation"
    ],
    answer: 3,
    explanation: "Code generation produces machine code, intermediate code, or other executable forms."
  },
  {
    q: "Which of the following is an advantage of using an intermediate representation during compilation?",
    options: [
      "Faster compilation speed",
      "Improved error detection",
      "Portability across different platforms",
      "Reduced memory usage"
    ],
    answer: 2,
    explanation: "Intermediate code allows the same code to be translated to multiple target platforms."
  },
  {
    q: "Which phase of the compiler is responsible for error handling and reporting?",
    options: [
      "Lexical Analysis",
      "Syntax Analysis",
      "Semantic Analysis",
      "Error Handling"
    ],
    answer: 1,
    explanation: "Syntax analysis detects syntax errors and reports them to the programmer."
  },
  {
    q: "Which of the following is true about syntax-directed translation?",
    options: [
      "It only involves the lexical analysis phase.",
      "It involves generating intermediate code from the parse tree.",
      "It is concerned with optimization of generated code.",
      "It is performed during the code generation phase."
    ],
    answer: 1,
    explanation: "Syntax-directed translation associates actions with grammar productions to generate intermediate code."
  },
  {
    q: "What is the purpose of semantic rules in syntax-directed translation?",
    options: [
      "To define the syntactic structure of the language.",
      "To assign types to variables used in the program.",
      "To perform optimization techniques on intermediate code.",
      "To define the order of evaluation of expressions."
    ],
    answer: 1,
    explanation: "Semantic rules assign types, perform type checking, and enforce type compatibility."
  },
  {
    q: "Which phase of the compiler is responsible for type checking?",
    options: [
      "Lexical Analysis",
      "Syntax Analysis",
      "Semantic Analysis",
      "Code Generation"
    ],
    answer: 2,
    explanation: "Semantic analysis ensures operations are type-correct and manages the symbol table."
  },
  {
    q: "What is type checking in a compiler?",
    options: [
      "Verifying the syntax of the program.",
      "Detecting lexical errors in the program.",
      "Ensuring operations on variables are well-defined and compatible.",
      "Generating intermediate code for the program."
    ],
    answer: 2,
    explanation: "Type checking ensures operations on variables are compatible with their declared types."
  },
  {
    q: "Which of the following is an example of a static type checking technique?",
    options: [
      "Type inference",
      "Dynamic typing",
      "Run-time type checking",
      "Operator overloading"
    ],
    answer: 0,
    explanation: "Type inference deduces variable types at compile-time without explicit declarations."
  },
  {
    q: "What is the purpose of a type symbol table in a compiler?",
    options: [
      "To store the types of variables used in the program.",
      "To store the names of variables used in the program.",
      "To store the intermediate code generated during parsing.",
      "To store the syntax rules of the programming language."
    ],
    answer: 0,
    explanation: "A type symbol table stores type information for variables, functions, etc., for type checking."
  },
  {
    q: "Which of the following is an example of a type error in a program?",
    options: [
      "Syntax error in an if-else statement.",
      "Division of a number by zero.",
      "Accessing an array element out of bounds.",
      "Incorrect indentation in the program."
    ],
    answer: 1,
    explanation: "Division by zero is a type error as it violates arithmetic semantics."
  },
  {
    q: "Which of the following is an advantage of using type checking in a compiler?",
    options: [
      "Improved program performance.",
      "Enhanced code optimization.",
      "Early detection of potential runtime errors.",
      "Simplified debugging process."
    ],
    answer: 2,
    explanation: "Type checking detects potential runtime errors before execution."
  },
  {
    q: "What is the primary goal of type checking in a compiler?",
    options: [
      "To ensure syntactic correctness of the program.",
      "To generate efficient machine code.",
      "To enforce programming language rules and constraints.",
      "To provide support for code reuse through libraries."
    ],
    answer: 2,
    explanation: "Type checking enforces language rules and ensures program correctness regarding types."
  },
  {
    q: "Which of the following is an example of type coercion or type conversion?",
    options: [
      "Assigning a floating-point value to an integer variable.",
      "Assigning a value to an uninitialized variable.",
      "Declaring a variable without specifying its type.",
      "Using an undeclared variable in the program."
    ],
    answer: 0,
    explanation: "Assigning a float to an int is an example of type conversion or coercion."
  },







  {
    q: "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
    options: ["Merge Sort", "Heap Sort", "Quick Sort", "Insertion Sort"],
    answer: 0,
    explanation: "Merge Sort works efficiently on linked lists and has O(n log n) time complexity."
  },
  {
    q: "Which combinational circuit receives 2^n input lines and directs them to a single output line?",
    options: ["Decoder", "Encoder", "Multiplexer", "Flip flop"],
    answer: 2,
    explanation: "A multiplexer selects one input from multiple inputs and sends it to a single output."
  },
  {
    q: "Maximum number of elements in the array declaration int x[5][8]; is",
    options: ["40", "28", "13"],
    answer: 0,
    explanation: "Total elements = rows × columns = 5 × 8 = 40."
  },
  {
    q: "The total number of states required to automate the regular expression (00)*(11)* is",
    options: ["3", "5", "4", "6"],
    answer: 1,
    explanation: "The minimal DFA for (00)*(11)* requires 5 states."
  },
  {
    q: "First order logic statements contain ______.",
    options: [
      "Predicate and Preposition",
      "Subject and an Object",
      "Predicate and Subject",
      "None of the above"
    ],
    answer: 2,
    explanation: "First order logic consists of predicates applied to subjects."
  },
  {
    q: "A language can be generated from simple primitive language in a simple way if and only if",
    options: [
      "It is recognized by a device of infinite states",
      "It takes no auxiliary memory",
      "All of the mentioned",
      "None of the mentioned"
    ],
    answer: 1,
    explanation: "Languages generated simply from primitive languages do not require auxiliary memory."
  },
  {
    q: "Which of the following is used to display the output in PHP?",
    options: ["Echo", "Write", "Print", "Both (a) and (c)"],
    answer: 3,
    explanation: "Both echo and print are used to display output in PHP."
  },
  {
    q: "In order to ensure the security of the data/information, we need to ____________ the data.",
    options: ["Encrypt", "Decrypt", "Delete", "None of the above"],
    answer: 0,
    explanation: "Encryption protects data from unauthorized access."
  },
  {
    q: "Which of the following is not a type of database?",
    options: ["Decentralized", "Distributed", "Hierarchical", "Network"],
    answer: 0,
    explanation: "Decentralized is not considered a standard database model."
  },
  {
    q: "Which of the following statement is false?",
    options: [
      "Regular language is the subset of context sensitive language",
      "Context sensitive language is a subset of context free language",
      "Context free language is the subset of context sensitive language",
      "Recursively enumerable language is the superset of regular language"
    ],
    answer: 1,
    explanation: "Context-sensitive languages are NOT a subset of context-free languages."
  },
  {
    q: "Which of the following statements is not true?",
    options: [
      "Every language defined by a regular expression can be represented using a DFA",
      "Regular expression is just another representation for any automata definition",
      "Every language defined by a regular expression can be represented using NFA with ε-moves",
      "Every language defined by any of the automata is also defined by a regular expression"
    ],
    answer: 0,
    explanation: "Some regular expressions require conversion steps and are not directly represented as DFA."
  },
  {
    q: "Which AI technique enables computers to understand the associations and relationships between objects and events?",
    options: [
      "Heuristic Processing",
      "Relative Symbolism",
      "Cognitive Science",
      "Pattern Matching"
    ],
    answer: 3,
    explanation: "Pattern matching helps identify relationships and associations between data."
  },
  {
    q: "Which word correctly summarizes the importance of software design?",
    options: ["Efficiency", "Quality", "Complexity", "Accuracy"],
    answer: 1,
    explanation: "Good software design directly impacts overall software quality."
  },
  {
    q: "Function prototyping is used to",
    options: [
      "Describe the return value only",
      "Describe the parameters",
      "Introduce the function",
      "Describe type of arguments"
    ],
    answer: 2,
    explanation: "Function prototypes introduce the function to the compiler before its definition."
  },
  {
    q: "The main memory accommodates ____________",
    options: ["CPU", "User processes", "Operating system", "All of the mentioned"],
    answer: 3,
    explanation: "Main memory holds the OS, user processes, and related data."
  },


 
  {
    q: "The variables which can be accessed by all of the program modules in a computer program are called",
    options: ["Global variables", "Parameters", "Arguments", "Local variables"],
    answer: 0,
    explanation: "Global variables can be accessed from any module of the program."
  },
  {
    q: "In computer networks, nodes are",
    options: [
      "The computer that originates the data",
      "The computer that routes the data",
      "The computer that terminates the data",
      "All of the mentioned"
    ],
    answer: 3,
    explanation: "A node can originate, route, or terminate data."
  },
  {
    q: "Which form has a relation that contains information about a single entity?",
    options: ["5NF", "4NF", "3NF", "2NF"],
    answer: 1,
    explanation: "4NF ensures relations contain information about a single entity."
  },
  {
    q: "The operating system is responsible for",
    options: [
      "Bad-block recovery",
      "Booting from disk",
      "Disk initialization",
      "All of the mentioned"
    ],
    answer: 3,
    explanation: "All listed tasks are handled by the operating system."
  },
  {
    q: "Which function is used to set a cookie in PHP?",
    options: ["createcookie()", "makecookie()", "setcookie()", "None of the above"],
    answer: 2,
    explanation: "setcookie() is the PHP function used to create cookies."
  },
  {
    q: "If the hypothesis predicts positive but the result is negative, it is known as",
    options: [
      "Specialized Hypothesis",
      "Consistent Hypothesis",
      "False Negative Hypothesis",
      "False Positive Hypothesis"
    ],
    answer: 3,
    explanation: "False positive occurs when a positive is predicted but the actual result is negative."
  },
  {
    q: "Which is used for creating and deleting database structures?",
    options: [
      "Relational Schema",
      "Query",
      "DDL (Data Definition Language)",
      "DML (Data Manipulation Language)"
    ],
    answer: 2,
    explanation: "DDL defines and modifies database structures."
  },
  {
    q: "The output of the lexical and syntax analyzer is",
    options: [
      "Parse stream, parse tree",
      "Token tree, parse tree",
      "All of the mentioned",
      "Token stream, parse tree"
    ],
    answer: 3,
    explanation: "Lexical analyzer produces tokens and syntax analyzer produces parse tree."
  },
  {
    q: "A deadlock avoidance algorithm examines the",
    options: [
      "Resources",
      "System storage state",
      "Operating system",
      "Resource allocation state"
    ],
    answer: 3,
    explanation: "Deadlock avoidance ensures no circular wait by checking resource allocation."
  },
  {
    q: "Recursive binary search uses which technique?",
    options: [
      "Simple recursion",
      "Divide and conquer",
      "Branch and bound",
      "Dynamic programming"
    ],
    answer: 1,
    explanation: "Binary search divides the problem into smaller subproblems."
  },
  {
    q: "For an effective operating system, when should deadlock be checked?",
    options: [
      "Every time a resource request is made at fixed time intervals",
      "At fixed time intervals",
      "Every time a resource request is made",
      "None of the mentioned"
    ],
    answer: 0,
    explanation: "Deadlock detection is performed periodically when resource requests occur."
  },
  {
    q: "Which error is handled by the operating system?",
    options: [
      "Lack of paper in printer",
      "Power failure",
      "Network connection failure",
      "All of the mentioned"
    ],
    answer: 3,
    explanation: "The OS handles all hardware and system-level errors."
  },
  {
    q: "The dispatcher in a process scheduler is responsible for",
    options: [
      "Assigning ready processes to waiting queue",
      "Assigning running processes to blocked queue",
      "Assigning ready processes to CPU",
      "All of the mentioned"
    ],
    answer: 2,
    explanation: "Dispatcher assigns the CPU to ready processes."
  },
  {
    q: "A device that forwards packets between networks is called",
    options: ["Router", "Hub", "Firewall", "Bridge"],
    answer: 0,
    explanation: "Routers forward packets using routing information."
  },
  {
    q: "Communication channel shared by all machines is found in",
    options: [
      "Multicast network",
      "Unicast network",
      "Broadcast network",
      "Anycast network"
    ],
    answer: 2,
    explanation: "Broadcast networks share the communication channel."
  },
  {
    q: "Minimum transitions required for {a,b}*{baaa} to reach final state is",
    options: ["5", "4", "3", "6"],
    answer: 1,
    explanation: "The minimum number of transitions is 4."
  },
  {
    q: "An array is",
    options: [
      "Contiguous allocation of memory occupied by similar data types",
      "Contiguous allocation of memory occupied by different data types",
      "De-allocation of memory of similar data types",
      "None"
    ],
    answer: 0,
    explanation: "Arrays store similar data types in contiguous memory locations."
  },
  {
    q: "Network congestion occurs",
    options: [
      "In case of transfer failure",
      "When connection terminates",
      "When system terminates",
      "In case of traffic overloading"
    ],
    answer: 3,
    explanation: "Congestion happens when network traffic exceeds capacity."
  },
  {
    q: "Auxiliary memory is",
    options: [
      "Memory that communicates with CPU",
      "A device that provides backup storage",
      "Fastest memory",
      "All"
    ],
    answer: 1,
    explanation: "Auxiliary memory is used for secondary/backup storage."
  },
  {
    q: "Linked lists are not suitable for implementing",
    options: [
      "Insertion sort",
      "Binary search",
      "Radix sort",
      "Polynomial manipulation"
    ],
    answer: 1,
    explanation: "Binary search requires random access, which linked lists do not support."
  },
  {
    q: "Which does not belong to OOP concepts?",
    options: [
      "Data binding",
      "Message passing",
      "Data hiding",
      "Platform independent"
    ],
    answer: 3,
    explanation: "Platform independence is not an OOP concept."
  },
  {
    q: "Which is an incorrect activity in software configuration management?",
    options: [
      "Change management",
      "Version management",
      "Internship management",
      "System management"
    ],
    answer: 2,
    explanation: "Internship management is unrelated to software configuration management."
  },
  {
    q: "Which command permanently saves a transaction in a database?",
    options: ["Commit", "Rollback", "Savepoint", "None"],
    answer: 0,
    explanation: "COMMIT makes database changes permanent."
  },
  {
    q: "An AI agent perceives and acts using",
    options: ["Sensors", "Perceiver", "Actuators", "Both a and c"],
    answer: 3,
    explanation: "AI agents use sensors to perceive and actuators to act."
  },
  {
    q: "Database architecture is viewed as",
    options: ["Three-level", "Two-level", "One-level", "Four-level"],
    answer: 0,
    explanation: "Database architecture follows the three-level schema."
  },
  {
    q: "Rows of a relation are called",
    options: ["Degree", "Tuples", "Entity", "All of the above"],
    answer: 3,
    explanation: "Rows are tuples and represent entities in a relation."
  },
  {
    q: "If a process fails, the OS writes error information to",
    options: [
      "New file",
      "Another running process",
      "Log file",
      "None"
    ],
    answer: 2,
    explanation: "Error logs are stored in log files."
  },
  {
    q: "Which data structure is preferred in database systems?",
    options: ["B-tree", "AVL tree", "Splay tree", "B+ tree"],
    answer: 3,
    explanation: "B+ trees are optimized for database indexing."
  },
  {
    q: "Which model represents the dynamic behavior of a system?",
    options: [
      "Object model",
      "Context model",
      "Behavioral model",
      "Data model"
    ],
    answer: 2,
    explanation: "Behavioral models show how a system behaves over time."
  },
  {
    q: "CPU scheduling is the basis of",
    options: [
      "Multiprocessor systems",
      "Multiprogramming operating systems",
      "None of the mentioned",
      "Large memory systems"
    ],
    answer: 1,
    explanation: "CPU scheduling enables multiprogramming."
  },
  {
    q: "The strcpy() function",
    options: [
      "Copies one string to another",
      "Concatenates two strings",
      "Compares two strings",
      "Finds string length"
    ],
    answer: 0,
    explanation: "strcpy() copies one string into another."
  },
  {
    q: "Which technique predicts effort using LOC or FP?",
    options: [
      "Process-based estimation",
      "FP-based estimation",
      "COCOMO",
      "Both COCOMO and FP-based estimation"
    ],
    answer: 3,
    explanation: "Both methods estimate effort based on size metrics."
  },
  {
    q: "Overall database design is defined using",
    options: [
      "Application program",
      "Data definition language",
      "Schema",
      "Source code"
    ],
    answer: 2,
    explanation: "Schema defines the structure of the database."
  },
  {
    q: "Which gives a finite solution for infinite language input?",
    options: [
      "Compiler",
      "Interpreter",
      "Loader and Linker",
      "None of the mentioned"
    ],
    answer: 0,
    explanation: "Compilers process infinite language definitions into finite machine code."
  }



],


"2015+2" : [

  {
    q: "Which of the following is a common way of communicating with I/O devices?",
    options: [
      "Memory-mapped I/O",
      "Direct memory access (DMA)",
      "Interrupt-driven I/O",
      "All of the above"
    ],
    answer: 3,
    explanation: "Memory-mapped I/O, DMA, and interrupt-driven I/O are all common ways of communicating with I/O devices."
  },
  {
    q: "In memory-mapped I/O, I/O devices are mapped into the:",
    options: [
      "Main memory address space",
      "Cache memory address space",
      "Virtual memory address space",
      "Secondary memory address space"
    ],
    answer: 0,
    explanation: "In memory-mapped I/O, I/O devices are assigned addresses in the main memory address space."
  },
  {
    q: "Which technique allows data to be transferred between an I/O device and memory without involving the CPU?",
    options: [
      "Memory-mapped I/O",
      "Direct memory access (DMA)",
      "Interrupt-driven I/O",
      "I/O polling"
    ],
    answer: 1,
    explanation: "DMA allows the I/O device to transfer data directly to/from memory without CPU intervention."
  },
  {
    q: "Which method is used to handle I/O operations that require immediate attention from the CPU?",
    options: [
      "Memory-mapped I/O",
      "Direct memory access (DMA)",
      "Interrupt-driven I/O",
      "I/O polling"
    ],
    answer: 2,
    explanation: "Interrupt-driven I/O uses interrupts to signal the CPU that an I/O operation requires immediate attention."
  },
  {
    q: "Which I/O technique involves the CPU continuously checking the status of an I/O device for data transfer completion?",
    options: [
      "Memory-mapped I/O",
      "Direct memory access (DMA)",
      "Interrupt-driven I/O",
      "I/O polling"
    ],
    answer: 3,
    explanation: "I/O polling involves the CPU repeatedly checking the status of an I/O device until data transfer is complete."
  },
  {
    q: "Which standard I/O interface is commonly used in UNIX-like operating systems?",
    options: [
      "ASCII",
      "USB",
      "RS-232",
      "POSIX"
    ],
    answer: 3,
    explanation: "POSIX is a standard I/O interface commonly used in UNIX-like operating systems."
  },
  {
    q: "Which standard I/O interface allows the connection of peripheral devices using a serial communication protocol?",
    options: [
      "USB",
      "Ethernet",
      "RS-232",
      "HDMI"
    ],
    answer: 2,
    explanation: "RS-232 is a standard interface for serial communication and is commonly used for connecting peripheral devices."
  },
  {
    q: "Which standard I/O interface is widely used for connecting external storage devices, such as hard drives and flash drives?",
    options: [
      "SATA",
      "USB",
      "Ethernet",
      "HDMI"
    ],
    answer: 1,
    explanation: "USB (Universal Serial Bus) is widely used for connecting external storage devices and other peripherals."
  },
  {
    q: "Which standard I/O interface is commonly used for high-speed communication between computer components?",
    options: [
      "SATA",
      "USB",
      "Ethernet",
      "HDMI"
    ],
    answer: 0,
    explanation: "SATA (Serial ATA) is commonly used for high-speed communication between storage devices and the motherboard."
  },
  {
    q: "Which standard I/O interface is primarily used for audio and video transmission between devices?",
    options: [
      "SATA",
      "USB",
      "Ethernet",
      "HDMI"
    ],
    answer: 3,
    explanation: "HDMI (High-Definition Multimedia Interface) is used primarily for audio and video transmission between devices."
  },
  {
    q: "Which of the following techniques improves the performance of a processor by overlapping the execution of multiple instructions?",
    options: [
      "Pipelining",
      "Caching",
      "Superscalar architecture",
      "Branch prediction"
    ],
    answer: 0,
    explanation: "Pipelining allows multiple instructions to execute simultaneously by dividing execution into stages."
  },
  {
    q: "Which technique improves the performance of a processor by storing frequently accessed data closer to the processor?",
    options: [
      "Pipelining",
      "Caching",
      "Superscalar architecture",
      "Branch prediction"
    ],
    answer: 1,
    explanation: "Caching reduces memory access time by storing frequently accessed data closer to the processor."
  },
  {
    q: "Which architecture allows multiple instructions to be executed in parallel by having multiple execution units?",
    options: [
      "Pipelining",
      "Caching",
      "Superscalar architecture",
      "Branch prediction"
    ],
    answer: 2,
    explanation: "Superscalar architecture enables execution of multiple instructions simultaneously using multiple execution units."
  },
  {
    q: "Which technique predicts the outcome of conditional branches to improve instruction execution in a processor?",
    options: [
      "Pipelining",
      "Caching",
      "Superscalar architecture",
      "Branch prediction"
    ],
    answer: 3,
    explanation: "Branch prediction predicts whether a conditional branch will be taken, allowing prefetch of instructions."
  },
  {
    q: "Which technique improves memory access performance by organizing memory into hierarchical levels?",
    options: [
      "Pipelining",
      "Caching",
      "Superscalar architecture",
      "Virtual memory"
    ],
    answer: 1,
    explanation: "Caching improves memory access by using a hierarchy of cache memories that store frequently accessed data."
  },
  {
    q: "Which technique reduces memory access latency by allowing the processor to fetch multiple instructions in a single cycle?",
    options: [
      "Pipelining",
      "Caching",
      "Superscalar architecture",
      "Instruction-level parallelism"
    ],
    answer: 3,
    explanation: "Instruction-level parallelism allows the processor to fetch and execute multiple instructions in parallel."
  },
  {
    q: "Which technique improves performance by translating high-level language instructions into a more efficient form before execution?",
    options: [
      "Pipelining",
      "Caching",
      "Superscalar architecture",
      "Just-in-time (JIT) compilation"
    ],
    answer: 3,
    explanation: "JIT compilation translates high-level instructions into machine code at runtime for better efficiency."
  },
  {
    q: "Which technique improves performance by predicting the next set of instructions to be executed based on past execution patterns?",
    options: [
      "Pipelining",
      "Caching",
      "Superscalar architecture",
      "Branch prediction"
    ],
    answer: 3,
    explanation: "Branch prediction predicts the next instructions to reduce pipeline stalls and improve performance."
  },
  {
    q: "Which technique improves performance by dynamically reordering instructions to maximize instruction-level parallelism?",
    options: [
      "Pipelining",
      "Caching",
      "Superscalar architecture",
      "Out-of-order execution"
    ],
    answer: 3,
    explanation: "Out-of-order execution allows instructions to execute in an order that maximizes parallelism."
  },
  {
    q: "Which technique improves performance by dynamically allocating processor resources based on program behavior?",
    options: [
      "Pipelining",
      "Caching",
      "Superscalar architecture",
      "Dynamic resource allocation"
    ],
    answer: 3,
    explanation: "Dynamic resource allocation adjusts processor resources in response to program behavior to improve performance."
  },










{
  q: "Every recursive language is also a recursively enumerable language. True or False?",
  options: [
    "Every recursive language is also a recursively enumerable language.",
    "Every recursively enumerable language is also a recursive language.",
    "Recursive languages are a strict subset of recursively enumerable languages.",
    "Recursive languages are unrelated to recursively enumerable languages."
  ],
  answer: 0,
  explanation: "Recursive languages are a subset of recursively enumerable languages, and they can be recognized by a Turing machine that always halts."
},
{
  q: "Which of the following is an example of an undecidable problem?",
  options: [
    "Checking if a given number is prime",
    "Sorting a list of numbers in ascending order",
    "Solving a system of linear equations",
    "Determining if a Turing machine halts on a given input"
  ],
  answer: 3,
  explanation: "Determining if a Turing machine halts on a given input, known as the halting problem, is undecidable."
},
{
  q: "Which of the following is an example of a non-recursive language?",
  options: [
    "{anbncn | n ≥ 0}",
    "{an | n is a prime number}",
    "{wwR | w is any string}",
    "{anb | n ≥ 0}"
  ],
  answer: 2,
  explanation: "The language {wwR | w is any string} cannot be recognized by a Turing machine that always halts, making it non-recursive."
},
{
  q: "Which of the following is true about the Chomsky hierarchy?",
  options: [
    "It categorizes formal languages based on their computational complexity.",
    "It categorizes formal languages based on their expressive power.",
    "It categorizes formal languages based on their alphabet size.",
    "It categorizes formal languages based on their syntactic structure."
  ],
  answer: 3,
  explanation: "The Chomsky hierarchy categorizes formal languages into four levels based on their syntactic structure and grammar types."
},
{
  q: "Which type of grammar is used to generate the language L = {anbn | n ≥ 0}?",
  options: [
    "Regular grammar",
    "Context-free grammar",
    "Context-sensitive grammar",
    "Unrestricted grammar"
  ],
  answer: 1,
  explanation: "The language {anbn | n ≥ 0} can be generated by a context-free grammar."
},
{
  q: "Which of the following is a context-sensitive language?",
  options: [
    "{anbn | n ≥ 0}",
    "{anbm | n, m ≥ 0}",
    "{an | n is a prime number}",
    "{anb | n ≥ 0}"
  ],
  answer: 1,
  explanation: "The language {anbm | n, m ≥ 0} is context-sensitive."
},
{
  q: "Which type of automaton is used to recognize the language L = {anbn | n ≥ 0}?",
  options: [
    "Finite automaton",
    "Pushdown automaton",
    "Turing machine",
    "Non-deterministic automaton"
  ],
  answer: 1,
  explanation: "A pushdown automaton, using a stack, can recognize {anbn | n ≥ 0}."
},
{
  q: "Which grammar generates the language L = {wwR | w is any string}?",
  options: [
    "Regular grammar",
    "Context-free grammar",
    "Context-sensitive grammar",
    "Unrestricted grammar"
  ],
  answer: 3,
  explanation: "The language {wwR | w is any string} requires an unrestricted grammar."
},
{
  q: "Which type of automaton is used to recognize the language L = {wwR | w is any string}?",
  options: [
    "Finite automaton",
    "Pushdown automaton",
    "Turing machine",
    "Non-deterministic automaton"
  ],
  answer: 2,
  explanation: "A Turing machine can recognize {wwR | w is any string}."
},
{
  q: "Which type of grammar is used to generate the language L = {0n1n2n | n ≥ 0}?",
  options: [
    "Regular grammar",
    "Context-free grammar",
    "Context-sensitive grammar",
    "Unrestricted grammar"
  ],
  answer: 2,
  explanation: "The language {0n1n2n | n ≥ 0} is generated by a context-sensitive grammar."
},
{
  q: "Which type of automaton is used to recognize the language L = {0n1n2n | n ≥ 0}?",
  options: [
    "Finite automaton",
    "Pushdown automaton",
    "Turing machine",
    "Non-deterministic automaton"
  ],
  answer: 2,
  explanation: "A Turing machine can recognize {0n1n2n | n ≥ 0}."
},
{
  q: "Which type of grammar is used to generate the language L = {an | n is a prime number}?",
  options: [
    "Regular grammar",
    "Context-free grammar",
    "Context-sensitive grammar",
    "Unrestricted grammar"
  ],
  answer: 3,
  explanation: "Generating {an | n is prime} requires an unrestricted grammar."
},
{
  q: "Which type of automaton is used to recognize the language L = {an | n is a prime number}?",
  options: [
    "Finite automaton",
    "Pushdown automaton",
    "Turing machine",
    "Non-deterministic automaton"
  ],
  answer: 2,
  explanation: "A Turing machine can recognize {an | n is a prime number}."
},
{
  q: "Which type of grammar is used to generate the language L = {anb | n ≥ 0}?",
  options: [
    "Regular grammar",
    "Context-free grammar",
    "Context-sensitive grammar",
    "Unrestricted grammar"
  ],
  answer: 0,
  explanation: "The language {anb | n ≥ 0} can be generated by a regular grammar."
},
{
  q: "Which complexity class contains problems that can be solved in polynomial time?",
  options: [
    "P",
    "NP",
    "PSPACE",
    "EXPTIME"
  ],
  answer: 0,
  explanation: "The complexity class P contains problems solvable in polynomial time."
},
{
  q: "Which complexity class represents problems that can be verified in polynomial time?",
  options: [
    "P",
    "NP",
    "PSPACE",
    "EXPTIME"
  ],
  answer: 1,
  explanation: "NP contains problems verifiable in polynomial time."
},
{
  q: "Which complexity class contains problems that can be solved using polynomial space?",
  options: [
    "P",
    "NP",
    "PSPACE",
    "EXPTIME"
  ],
  answer: 2,
  explanation: "PSPACE contains problems solvable using polynomial space."
},
{
  q: "Which concept is used to show that one problem can be reduced to another to prove hardness?",
  options: [
    "Reductions",
    "Hierarchy",
    "Completeness",
    "Complexity classes"
  ],
  answer: 0,
  explanation: "Reductions are used to prove hardness or completeness by transforming one problem into another."
},
{
  q: "Which complexity class represents the most difficult problems in a particular class?",
  options: [
    "P",
    "NP",
    "PSPACE",
    "EXPTIME"
  ],
  answer: 2,
  explanation: "PSPACE represents the most difficult problems in polynomial space."
},
{
  q: "Which phase of the compiler is responsible for recognizing tokens and building a symbol table?",
  options: [
    "Lexical Analysis",
    "Syntax Analysis",
    "Semantic Analysis",
    "Code Generation"
  ],
  answer: 0,
  explanation: "Lexical Analysis scans the source code, recognizes tokens, and builds a symbol table."
},
{
  q: "What is the primary output of the lexical analysis phase?",
  options: [
    "Abstract Syntax Tree (AST)",
    "Symbol Table",
    "Intermediate Code",
    "Assembly Code"
  ],
  answer: 1,
  explanation: "The primary output of lexical analysis is the symbol table."
},
{
  q: "Which phase of the compiler is responsible for checking the correctness of the program's structure?",
  options: [
    "Lexical Analysis",
    "Syntax Analysis",
    "Semantic Analysis",
    "Code Generation"
  ],
  answer: 1,
  explanation: "Syntax Analysis checks the correctness of the program's structure."
},









{
  q: "The basic building block of computer hardware is:",
  options: [
    "CPU",
    "Memory",
    "Hard disk",
    "Motherboard"
  ],
  answer: 1,
  explanation: "Memory is the fundamental building block of computer hardware, where data and instructions are stored for processing."
},
{
  q: "Which component is responsible for executing instructions and performing calculations in a computer?",
  options: [
    "CPU",
    "Memory",
    "Hard disk",
    "Motherboard"
  ],
  answer: 0,
  explanation: "The Central Processing Unit (CPU) executes instructions and performs calculations in a computer."
},
{
  q: "Which component stores data and instructions even when the computer is turned off?",
  options: [
    "CPU",
    "Memory",
    "Hard disk",
    "Motherboard"
  ],
  answer: 2,
  explanation: "The hard disk is a non-volatile storage device that stores data and instructions even when the computer is turned off."
},
{
  q: "The motherboard of a computer is responsible for:",
  options: [
    "Executing instructions",
    "Storing data",
    "Connecting different components",
    "Performing calculations"
  ],
  answer: 2,
  explanation: "The motherboard acts as a central hub connecting the CPU, memory, storage devices, and peripherals."
},
{
  q: "Which component is responsible for storing data and instructions temporarily during program execution?",
  options: [
    "CPU",
    "Memory",
    "Hard disk",
    "Motherboard"
  ],
  answer: 1,
  explanation: "Memory stores data and instructions temporarily while a program is executed by the CPU."
},
{
  q: "Which type of software controls and manages the hardware resources of a computer?",
  options: [
    "Operating system",
    "Application software",
    "Programming language",
    "Compiler"
  ],
  answer: 0,
  explanation: "The operating system manages hardware resources such as memory, CPU, and peripherals."
},
{
  q: "Which software allows users to perform specific tasks or functions on a computer?",
  options: [
    "Operating system",
    "Application software",
    "Programming language",
    "Compiler"
  ],
  answer: 1,
  explanation: "Application software allows users to perform tasks such as word processing or graphic design."
},
{
  q: "Which component of the computer system holds the instructions and data that are currently being processed?",
  options: [
    "CPU",
    "Memory",
    "Hard disk",
    "Motherboard"
  ],
  answer: 1,
  explanation: "Memory holds the instructions and data that are currently being processed by the CPU."
},
{
  q: "Which type of software translates high-level programming languages into machine code?",
  options: [
    "Operating system",
    "Application software",
    "Programming language",
    "Compiler"
  ],
  answer: 3,
  explanation: "A compiler translates high-level programming languages into machine code."
},
{
  q: "The system clock in a computer is responsible for:",
  options: [
    "Controlling the execution speed of instructions",
    "Storing data and instructions",
    "Managing the input/output devices",
    "Connecting different hardware components"
  ],
  answer: 0,
  explanation: "The system clock generates timing signals to control execution speed and synchronize operations."
},
{
  q: "Which process is responsible for fetching instructions from memory?",
  options: [
    "Decoding",
    "Execution",
    "Fetching",
    "Storing"
  ],
  answer: 2,
  explanation: "Fetching retrieves instructions from memory to be executed by the CPU."
},
{
  q: "Which process decodes the fetched instruction and determines the necessary actions?",
  options: [
    "Decoding",
    "Execution",
    "Fetching",
    "Storing"
  ],
  answer: 0,
  explanation: "Decoding interprets the fetched instruction and determines the actions to be taken by the CPU."
},
{
  q: "Which process carries out the actual operations or calculations specified by the instruction?",
  options: [
    "Decoding",
    "Execution",
    "Fetching",
    "Storing"
  ],
  answer: 1,
  explanation: "Execution performs the operations or calculations specified by the decoded instruction."
},
{
  q: "Which process is responsible for storing the results of the executed instruction?",
  options: [
    "Decoding",
    "Execution",
    "Fetching",
    "Storing"
  ],
  answer: 3,
  explanation: "Storing saves the results of the executed instruction back to memory or registers."
},
{
  q: "Which unit of the CPU is responsible for fetching instructions and data from memory?",
  options: [
    "Arithmetic Logic Unit (ALU)",
    "Control Unit (CU)",
    "Cache Unit",
    "Register Unit"
  ],
  answer: 1,
  explanation: "The Control Unit fetches instructions and data and coordinates other CPU operations."
},
{
  q: "Which unit of the CPU performs arithmetic and logical operations?",
  options: [
    "Arithmetic Logic Unit (ALU)",
    "Control Unit (CU)",
    "Cache Unit",
    "Register Unit"
  ],
  answer: 0,
  explanation: "The ALU performs arithmetic (add, subtract) and logical (AND, OR) operations."
},
{
  q: "Which component of the CPU temporarily stores data and instructions during processing?",
  options: [
    "Arithmetic Logic Unit (ALU)",
    "Control Unit (CU)",
    "Cache Unit",
    "Register Unit"
  ],
  answer: 3,
  explanation: "The Register Unit temporarily stores data and instructions during processing."
},
{
  q: "Which component of the CPU controls the flow of data and instructions within the CPU?",
  options: [
    "Arithmetic Logic Unit (ALU)",
    "Control Unit (CU)",
    "Cache Unit",
    "Register Unit"
  ],
  answer: 1,
  explanation: "The Control Unit coordinates operations and controls data/instruction flow within the CPU."
},
{
  q: "Which component of the CPU stores frequently accessed data for faster access?",
  options: [
    "Arithmetic Logic Unit (ALU)",
    "Control Unit (CU)",
    "Cache Unit",
    "Register Unit"
  ],
  answer: 2,
  explanation: "The Cache Unit stores frequently accessed data closer to the CPU for faster access."
},
{
  q: "Which process is responsible for determining the next instruction to be fetched and executed?",
  options: [
    "Decoding",
    "Execution",
    "Fetching",
    "Storing"
  ],
  answer: 2,
  explanation: "The fetching process uses the program counter to determine the next instruction to execute."
},
{
  q: "Which of the following describes the relationship between formal languages, formal grammars, and automata?",
  options: [
    "Formal languages are generated by formal grammars, which are recognized by automata.",
    "Formal languages recognize automata, which are generated by formal grammars.",
    "Formal grammars generate automata, which recognize formal languages.",
    "Formal grammars recognize formal languages, which generate automata."
  ],
  answer: 0,
  explanation: "Formal languages are generated by formal grammars, and automata are used to recognize these languages."
}

],
















    "2016": [

        { 
            q: "Which approach is commonly used for query processing in a distributed database system?", 
            options: ["Centralized query processing", "Distributed query processing", "Parallel query processing", "Sequential query processing"], 
            answer: 1, 
            explanation: "Distributed query processing involves distributing query execution across multiple sites."
        },
        { 
            q: "What is the role of a distributed transaction coordinator in a distributed database system?", 
            options: ["It ensures the consistency of data across all sites.", "It manages the distribution and retrieval of data across multiple sites.", "It controls the access permissions of users in the system.", "It handles the physical storage of data at each site."], 
            answer: 0, 
            explanation: "It ensures data consistency across all sites."
        },



    { 
        q: 'What does the "this" keyword refer to in Java?', 
        options: [
            'The current object instance', 
            'The superclass of the current class', 
            'The subclass of the current class', 
            'The class that contains the current method'
        ], 
        answer: 0, 
        explanation: '"this" refers to the current object instance and is used to access instance variables/methods.'
    },
    { 
        q: 'What is a constructor in Java?', 
        options: [
            'A method that returns a value', 
            'A method used for exception handling', 
            'A special method used to initialize objects', 
            'A method used to override a superclass method'
        ], 
        answer: 2, 
        explanation: 'A constructor is a special method used to initialize objects; it has the same name as the class and is called automatically when an object is created.'
    },
    { 
        q: 'What is method overloading in Java?', 
        options: [
            'Creating multiple methods with the same name but different return types', 
            'Creating multiple methods with the same name but different parameter lists', 
            'Creating multiple methods with the same name and parameter list but different return types', 
            'Creating multiple methods with the same name and parameter list but different access modifiers'
        ], 
        answer: 1, 
        explanation: 'Method overloading allows multiple methods with the same name but different parameter lists; the compiler chooses which method to call based on arguments.'
    },
    { 
        q: 'What is method overriding in Java?', 
        options: [
            'Creating multiple methods with the same name but different return types', 
            'Creating multiple methods with the same name but different parameter lists', 
            'Creating a new method with the same name and parameter list in the subclass', 
            'Redefining a method in the subclass that already exists in the superclass'
        ], 
        answer: 3, 
        explanation: 'Method overriding occurs when a subclass provides its own implementation of a method that exists in the superclass with the same signature.'
    },
    { 
        q: 'What is the purpose of the super keyword in Java?', 
        options: [
            'It refers to the current object instance', 
            'It refers to the superclass of the current class', 
            'It refers to the class that contains the current method', 
            'It refers to the class from which the current class is derived'
        ], 
        answer: 1, 
        explanation: 'The super keyword refers to the superclass of the current class and can be used to access its members or constructor.'
    },
    { 
        q: 'What is polymorphism in Java?', 
        options: [
            'The ability to create multiple objects of the same class', 
            'The process of converting an object to a string representation', 
            'The ability of an object to take on many forms through inheritance', 
            'The process of comparing two objects for equality'
        ], 
        answer: 2, 
        explanation: 'Polymorphism allows objects of different classes to be treated as objects of a common superclass, enabling method overriding and dynamic method dispatch.'
    },
    { 
        q: 'Which object-oriented principle promotes code reuse and relationships between classes?', 
        options: [
            'Encapsulation', 
            'Inheritance', 
            'Polymorphism', 
            'Abstraction'
        ], 
        answer: 1, 
        explanation: 'Inheritance allows classes to inherit properties and methods from other classes, promoting code reuse.'
    },
    { 
        q: 'What is the purpose of encapsulation in OOP?', 
        options: [
            'To create relationships between classes', 
            'To allow classes to inherit properties and behaviors', 
            'To hide internal implementation details and expose a public interface', 
            'To provide different implementations of a method based on the object\'s type'
        ], 
        answer: 2, 
        explanation: 'Encapsulation bundles data and methods together and hides internal implementation while providing a public interface.'
    },
    { 
        q: 'Which OOP principle allows an object to exhibit different behaviors based on its data type?', 
        options: [
            'Encapsulation', 
            'Inheritance', 
            'Polymorphism', 
            'Abstraction'
        ], 
        answer: 2, 
        explanation: 'Polymorphism allows objects to take many forms and exhibit different behaviors depending on their type.'
    },
    { 
        q: 'What is the purpose of abstraction in OOP?', 
        options: [
            'To create relationships between classes', 
            'To allow classes to inherit properties and behaviors', 
            'To hide internal implementation details and expose a public interface', 
            'To provide different implementations of a method based on the object\'s type'
        ], 
        answer: 2, 
        explanation: 'Abstraction simplifies complex systems by exposing only essential features while hiding implementation details.'
    },
    { 
        q: 'Which keyword is used to implement inheritance in Java?', 
        options: ['super', 'extends', 'implements', 'this'], 
        answer: 1, 
        explanation: 'The extends keyword indicates that a class inherits from a superclass.'
    },
    { 
        q: 'Which keyword is used to implement method overriding in Java?', 
        options: ['super', 'extends', 'implements', 'override'], 
        answer: 3, 
        explanation: 'In Java, overriding occurs automatically when a subclass defines a method with the same signature as the superclass method.'
    },
    { 
        q: 'What is the purpose of an interface in Java?', 
        options: [
            'To define a blueprint for a class', 
            'To allow multiple inheritance', 
            'To create objects directly', 
            'To hide internal implementation details'
        ], 
        answer: 0, 
        explanation: 'An interface defines a set of methods a class must implement and cannot be instantiated directly.'
    },
    { 
        q: 'Which OOP principle groups related properties and behaviors into a single unit?', 
        options: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction'], 
        answer: 0, 
        explanation: 'Encapsulation bundles related data and methods into a class for better modularity.'
    },
    { 
        q: 'Which OOP concept is used to create objects based on a class?', 
        options: ['Polymorphism', 'Inheritance', 'Encapsulation', 'Instantiation'], 
        answer: 3, 
        explanation: 'Instantiation creates objects from a predefined class or blueprint.'
    },
    { 
        q: 'Which of the following is NOT a technique used for algorithm analysis?', 
        options: ['Asymptotic analysis', 'Experimental analysis', 'Dynamic analysis', 'Graph analysis'], 
        answer: 2, 
        explanation: 'Dynamic analysis is analyzing algorithms during runtime, not a formal analysis technique.'
    },
    { 
        q: 'What is the purpose of asymptotic analysis in algorithm analysis?', 
        options: [
            'To measure actual running time', 
            'To determine best-case scenario', 
            'To analyze behavior as input size increases', 
            'To evaluate correctness'
        ], 
        answer: 2, 
        explanation: 'Asymptotic analysis studies algorithm behavior as input size approaches infinity.'
    },
    { 
        q: 'Which notation represents worst-case time complexity?', 
        options: ['Big O (O)', 'Theta (Θ)', 'Omega (Ω)', 'Small o (o)'], 
        answer: 0, 
        explanation: 'Big O notation provides an upper bound for worst-case algorithm complexity.'
    },
    { 
        q: 'Which time complexity represents the best-case scenario?', 
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'], 
        answer: 0, 
        explanation: 'O(1) indicates constant time complexity, the best-case scenario.'
    },
    { 
        q: 'Which time complexity represents the worst-case scenario?', 
        options: ['O(log n)', 'O(n)', 'O(n log n)', 'O(n^2)'], 
        answer: 3, 
        explanation: 'O(n^2) represents quadratic growth and a worst-case scenario.'
    },
    { 
        q: 'Which time complexity represents logarithmic growth?', 
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'], 
        answer: 1, 
        explanation: 'O(log n) represents algorithms that reduce the input space by half each step.'
    },
    { 
        q: 'Which time complexity represents linear growth?', 
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'], 
        answer: 2, 
        explanation: 'O(n) indicates algorithm running time grows linearly with input size.'
    },








    { 
        q: "What is the result of 10 / 3 in C++ using integer division?", 
        options: ["2", "3", "3.0", "3.3333"], 
        answer: 1, 
        explanation: "In C++, integer division truncates any fractional part, so 10 / 3 results in 3."
    },
    { 
        q: "Which mathematical operator is used to raise a number to a power in C++?", 
        options: ["^", "**", "pow()", "^="], 
        answer: 2, 
        explanation: "The pow() function from <cmath> is used to raise a number to a power."
    },
    { 
        q: "What is the output of double result = sqrt(16); cout << result;", 
        options: ["2", "4", "8", "16"], 
        answer: 1, 
        explanation: "The sqrt() function calculates the square root of 16, which is 4."
    },
    { 
        q: "Which header file should be included to use mathematical functions in C++?", 
        options: ["<iostream>", "<cmath>", "<string>", "<iomanip>"], 
        answer: 1, 
        explanation: "The <cmath> header provides mathematical functions such as sqrt(), pow(), etc."
    },
    { 
        q: "What is the output of int x = 5; int y = 2; cout << x % y;", 
        options: ["0", "1", "2", "3"], 
        answer: 1, 
        explanation: "The modulo operator (%) calculates the remainder. 5 % 2 equals 1."
    },
    { 
        q: "What is the output of double result = pow(3, 4); cout << result;", 
        options: ["7", "12", "27", "81"], 
        answer: 3, 
        explanation: "3 raised to the power 4 is 81 using the pow() function."
    },
    { 
        q: "What is the purpose of the abs() function in C++?", 
        options: [
            "To calculate the absolute value of a number", 
            "To calculate the average of two numbers", 
            "To round a floating-point number", 
            "To compare two numbers"
        ], 
        answer: 0, 
        explanation: "The abs() function returns the absolute (positive) value of a number."
    },
    { 
        q: "What is the output of int x = -7; cout << abs(x);", 
        options: ["-7", "7", "0", "Undefined"], 
        answer: 1, 
        explanation: "abs(-7) returns 7."
    },
    { 
        q: "What is the purpose of the ceil() function in C++?", 
        options: [
            "To calculate the ceiling value of a floating-point number", 
            "To calculate factorial of an integer", 
            "To round down a floating-point number", 
            "To perform bitwise complement"
        ], 
        answer: 0, 
        explanation: "ceil() rounds a floating-point number up to the nearest integer."
    },
    { 
        q: "Which of the following data types in C++ can store fractional values?", 
        options: ["int", "char", "float", "bool"], 
        answer: 2, 
        explanation: "float can store fractional values such as 3.14 or -0.5."
    },
    { 
        q: "What is the result of the expression 5 / 2 in C++?", 
        options: ["2", "2.5", "2.0", "2.25"], 
        answer: 0, 
        explanation: "Integer division truncates the fractional part, so 5 / 2 equals 2."
    },
    { 
        q: "What is the output of int x = 5; int y = 2; double result = static_cast<double>(x) / y; cout << result;", 
        options: ["2", "2.5", "2.0", "2.25"], 
        answer: 1, 
        explanation: "static_cast<double> converts x to double, so division produces 2.5."
    },
    { 
        q: "What is the value of x after int x = 10; x += 5; x /= 2;", 
        options: ["5", "7", "7.5", "10"], 
        answer: 1, 
        explanation: "x becomes 15 after += 5, then 15 / 2 = 7 (integer division)."
    },
    { 
        q: "What is the result of bool result = (5 > 3) && (10 < 8);", 
        options: ["true", "false", "compilation error", "runtime error"], 
        answer: 1, 
        explanation: "The && operator evaluates to false because (10 < 8) is false."
    },
    { 
        q: "What is the output of int x = 3; int y = 5; cout << (x == y);", 
        options: ["1", "0", "true", "false"], 
        answer: 1, 
        explanation: "x == y is false, which is represented as 0 in C++."
    },



        






    { 
        q: "Which approach is commonly used for query processing in a distributed database system?", 
        options: [
            "Centralized query processing", 
            "Distributed query processing", 
            "Parallel query processing", 
            "Sequential query processing"
        ], 
        answer: 1, 
        explanation: "Distributed query processing distributes query execution across multiple sites to optimize performance."
    },
    { 
        q: "What is the role of a distributed transaction coordinator in a distributed database system?", 
        options: [
            "It ensures the consistency of data across all sites.", 
            "It manages the distribution and retrieval of data across multiple sites.", 
            "It controls the access permissions of users in the system.", 
            "It handles the physical storage of data at each site."
        ], 
        answer: 0, 
        explanation: "The coordinator ensures data consistency across all sites by coordinating distributed transactions."
    },
    { 
        q: "Which approach is commonly used for data replication in a distributed database system?", 
        options: ["Eager replication", "Lazy replication", "Snapshot replication", "Incremental replication"], 
        answer: 1, 
        explanation: "Lazy replication replicates data asynchronously, delaying replication until necessary to ensure consistency."
    },
    { 
        q: "Which factor is important to consider when evaluating query processing strategies in a database system?", 
        options: ["Cost of query execution", "Size of the database", "Network bandwidth", "Data replication"], 
        answer: 0, 
        explanation: "Cost of query execution evaluates efficiency and performance of different strategies in terms of time and resources."
    },
    { 
        q: "What is the purpose of query optimization in a database system?", 
        options: [
            "To ensure data consistency", 
            "To minimize query execution time", 
            "To maximize data replication", 
            "To manage database security"
        ], 
        answer: 1, 
        explanation: "Query optimization finds the most efficient query plan to minimize execution time."
    },
    { 
        q: "What is a query plan in a database system?", 
        options: [
            "A set of database schemas", 
            "A representation of the query result", 
            "A sequence of operations to execute a query", 
            "A collection of database indices"
        ], 
        answer: 2, 
        explanation: "A query plan outlines the steps to execute a query, including scans, joins, and aggregations."
    },
    { 
        q: "What is a cost model in query optimization?", 
        options: [
            "A statistical model of query execution times", 
            "A model for estimating the cost of query plans", 
            "A model for analyzing database schemas", 
            "A statistical model for data distribution"
        ], 
        answer: 1, 
        explanation: "A cost model estimates the cost of different query plans considering CPU, disk I/O, and network latency."
    },
    { 
        q: "What is a join operation in query processing?", 
        options: [
            "Combining tuples from multiple tables based on a common attribute", 
            "Sorting the query result in ascending order", 
            "Grouping the query result based on a specific attribute", 
            "Filtering the query result based on a condition"
        ], 
        answer: 0, 
        explanation: "A join combines tuples from multiple tables using a common attribute to retrieve related data."
    },
    { 
        q: "Which index type is commonly used to speed up query processing in a database system?", 
        options: ["B-tree index", "Hash index", "Bitmap index", "Clustered index"], 
        answer: 0, 
        explanation: "B-tree indexes maintain an ordered tree structure of values to enable efficient data retrieval."
    },
    { 
        q: "What is query re-optimization in a database system?", 
        options: [
            "Re-executing the query with different parameters", 
            "Re-evaluating the query cost based on updated statistics", 
            "Re-writing the query in a different query language", 
            "Re-organizing the database schema to improve performance"
        ], 
        answer: 1, 
        explanation: "Query re-optimization re-evaluates the query cost using updated statistics to adjust the query plan dynamically."
    },
    { 
        q: "What is query pipelining in query processing?", 
        options: [
            "Dividing a query into subqueries and executing them in parallel", 
            "Dividing a query into stages and executing them sequentially", 
            "Dividing a query into multiple queries and executing them in parallel", 
            "Dividing a query into multiple stages and executing them concurrently"
        ], 
        answer: 3, 
        explanation: "Query pipelining divides a query into multiple stages and executes them concurrently to improve efficiency."
    },
    { 
        q: "What is query caching in query processing?", 
        options: [
            "Storing query results for future reuse", 
            "Storing intermediate results during query execution", 
            "Storing database metadata for query optimization", 
            "Storing query plans for efficient execution"
        ], 
        answer: 0, 
        explanation: "Query caching stores query results for future reuse, allowing faster retrieval for repeated queries."
    },
    { 
        q: "What is query parallelization in query processing?", 
        options: [
            "Dividing a query into subqueries and executing them in parallel", 
            "Dividing a query into stages and executing them sequentially", 
            "Dividing a query into multiple queries and executing them in parallel", 
            "Dividing a query into multiple stages and executing them concurrently"
        ], 
        answer: 0, 
        explanation: "Query parallelization divides a query into subqueries and executes them in parallel for performance improvement."
    },
    { 
        q: "Which of the following is NOT a programming paradigm?", 
        options: ["Procedural", "Object-oriented", "Functional", "Conditional"], 
        answer: 3, 
        explanation: "Conditional is a construct within programming paradigms, not a paradigm itself."
    },
    { 
        q: "What is the purpose of a compiler?", 
        options: [
            "To execute programs", 
            "To debug programs", 
            "To translate source code into machine code", 
            "To optimize program performance"
        ], 
        answer: 2, 
        explanation: "A compiler translates human-readable source code into machine code executable by the processor."
    },
    { 
        q: "What is the main advantage of high-level programming languages?", 
        options: [
            "They are easier to read and write than low-level languages.", 
            "They are faster and more efficient than low-level languages.", 
            "They provide direct control over hardware resources.", 
            "They are platform-specific and provide better compatibility."
        ], 
        answer: 0, 
        explanation: "High-level languages are closer to human language, making them easier to read, write, and understand."
    },
    { 
        q: "What is the purpose of a variable declaration in programming?", 
        options: [
            "To assign a value to a variable", 
            "To create a new variable", 
            "To specify the data type and name of a variable", 
            "To check the validity of a variable"
        ], 
        answer: 2, 
        explanation: "Variable declaration specifies the data type and name before the variable is used."
    },
    { 
        q: "What is the purpose of a loop in programming?", 
        options: [
            "To perform mathematical calculations", 
            "To make decisions based on conditions", 
            "To store and retrieve data", 
            "To repeat a set of instructions"
        ], 
        answer: 3, 
        explanation: "Loops repeat a set of instructions multiple times for efficient execution of repetitive tasks."
    },
    { 
        q: "What is the difference between a function and a method in programming?", 
        options: [
            "Functions are used in procedural programming, while methods are used in object-oriented programming.", 
            "Functions return a value, while methods do not.", 
            "Functions operate on data, while methods operate on objects.", 
            "There is no difference; the terms are used interchangeably."
        ], 
        answer: 0, 
        explanation: "Functions belong to procedural programming; methods belong to object-oriented programming."
    },










    { 
        q: "What is the purpose of a data dictionary in a database?", 
        options: [
            "To store user credentials", 
            "To manage database backups", 
            "To define the structure and attributes of data elements", 
            "To enforce referential integrity constraints"
        ], 
        answer: 2, 
        explanation: "A data dictionary is a central repository that defines the structure and attributes of data elements in a database, including tables, columns, types, and constraints."
    },
    { 
        q: "In the object-oriented model, an object is defined as:", 
        options: [
            "An instance of a class", 
            "A collection of attributes", 
            "A primary key in a database", 
            "A relationship between tables"
        ], 
        answer: 0, 
        explanation: "An object is an instance of a class representing a specific entity with attributes and behaviors."
    },
    { 
        q: "In the object-oriented model, encapsulation refers to:", 
        options: [
            "Combining multiple classes into a single entity", 
            "Hiding the internal details of an object", 
            "Establishing relationships between objects", 
            "Defining the inheritance hierarchy"
        ], 
        answer: 1, 
        explanation: "Encapsulation hides the internal details of an object and provides access only to necessary information and behaviors."
    },
    { 
        q: "In the object-oriented model, inheritance allows:", 
        options: [
            "Objects to have multiple parents", 
            "Objects to inherit attributes and behaviors from a superclass", 
            "Objects to be created dynamically at runtime", 
            "Objects to establish relationships with other objects"
        ], 
        answer: 1, 
        explanation: "Inheritance enables objects to inherit attributes and behaviors from a superclass, promoting code reuse."
    },
    { 
        q: "Which concept allows different classes to share the same method name but with different implementations?", 
        options: ["Polymorphism", "Abstraction", "Encapsulation", "Inheritance"], 
        answer: 0, 
        explanation: "Polymorphism allows objects of different classes to use the same method name with different implementations."
    },
    { 
        q: "The process of combining data and methods into a single entity is known as:", 
        options: ["Inheritance", "Polymorphism", "Abstraction", "Encapsulation"], 
        answer: 3, 
        explanation: "Encapsulation combines data and methods into a single entity, hiding internal details and controlling access."
    },
    { 
        q: "In the object-oriented model, association represents:", 
        options: [
            "Inheritance relationships between classes", 
            "Shared attributes among objects", 
            "The interactions between objects", 
            "Data duplication in the database"
        ], 
        answer: 2, 
        explanation: "Association defines interactions between objects, allowing them to communicate and exchange information."
    },
    { 
        q: "Which concept ensures that objects of different classes can be treated as objects of the same superclass?", 
        options: ["Polymorphism", "Inheritance", "Abstraction", "Encapsulation"], 
        answer: 1, 
        explanation: "Inheritance allows objects of different classes to be treated as objects of the same superclass, supporting code reuse and hierarchy."
    },
    { 
        q: "What is the purpose of abstraction in the object-oriented model?", 
        options: [
            "To combine multiple classes into a single entity", 
            "To hide the internal details of an object", 
            "To establish relationships between objects", 
            "To define the attributes and behaviors of a class"
        ], 
        answer: 1, 
        explanation: "Abstraction hides internal details and provides a simplified interface, focusing on essential features."
    },
    { 
        q: "Polymorphism allows objects to:", 
        options: [
            "Inherit attributes from multiple classes", 
            "Change their class dynamically at runtime", 
            "Access private methods of other objects", 
            "Be treated as objects of different classes"
        ], 
        answer: 3, 
        explanation: "Polymorphism allows objects to be treated as objects of different classes, providing flexibility and extensibility."
    },
    { 
        q: "Which concept defines the structure and behavior of objects?", 
        options: ["Class", "Object", "Attribute", "Method"], 
        answer: 0, 
        explanation: "A class is a blueprint that defines the structure and behavior of objects."
    },
    { 
        q: "Which recovery method restores the database to a previous state by undoing incomplete transactions?", 
        options: ["Rollback recovery", "Redo recovery", "Checkpoint recovery", "Restart recovery"], 
        answer: 0, 
        explanation: "Rollback recovery uses transaction logs to undo incomplete or failed transactions to restore a consistent database state."
    },
    { 
        q: "Which recovery method reapplies changes from committed transactions to restore the database?", 
        options: ["Redo recovery", "Checkpoint recovery", "Restart recovery", "Backup recovery"], 
        answer: 0, 
        explanation: "Redo recovery reapplies committed transactions from logs to ensure all changes are reflected in the database."
    },
    { 
        q: "Which recovery method creates checkpoints at regular intervals to save the current database state?", 
        options: ["Checkpoint recovery", "Redo recovery", "Rollback recovery", "Restart recovery"], 
        answer: 0, 
        explanation: "Checkpoint recovery saves the database state and transaction logs at intervals to speed up recovery."
    },
    { 
        q: "Which recovery method restarts the system and applies redo/undo operations to recover the database?", 
        options: ["Restart recovery", "Checkpoint recovery", "Redo recovery", "Rollback recovery"], 
        answer: 0, 
        explanation: "Restart recovery restores the database by applying necessary redo and undo operations after system restart."
    },
    { 
        q: "Which recovery method restores the database from a backup copy taken prior to failure?", 
        options: ["Backup recovery", "Rollback recovery", "Redo recovery", "Restart recovery"], 
        answer: 0, 
        explanation: "Backup recovery restores the database from a previously taken backup in case of catastrophic failure."
    },
    { 
        q: "Which recovery method is used to recover the database after a media failure, such as a disk crash?", 
        options: ["Backup recovery", "Redo recovery", "Checkpoint recovery", "Rollback recovery"], 
        answer: 0, 
        explanation: "Backup recovery restores data from backup after media failure."
    },












    { 
        q: "Which is a popular client-side library for building responsive user interfaces?", 
        options: ["Angular", "Vue.js", "React", "jQuery"], 
        answer: 2, 
        explanation: "React is a popular client-side JavaScript library that uses a component-based approach for building interactive UIs."
    },
    { 
        q: "Which technique handles communication between browser and server without interrupting user interaction?", 
        options: ["AJAX", "JSON", "Websockets", "RESTful API"], 
        answer: 2, 
        explanation: "Websockets allow bidirectional communication between browser and server without interrupting user interaction, enabling real-time data exchange."
    },
    { 
        q: "Which client-side technique stores data locally in a user's browser?", 
        options: ["Cookies", "Local storage", "Session storage", "IndexedDB"], 
        answer: 1, 
        explanation: "Local storage allows storing data in the browser with higher capacity than cookies, accessible across multiple sessions."
    },
    { 
        q: "Which technique optimizes web page loading by combining and minifying CSS/JS files?", 
        options: ["Compression", "Caching", "Minification", "Encryption"], 
        answer: 2, 
        explanation: "Minification reduces file size by removing unnecessary characters and whitespace to speed up page loading."
    },
    { 
        q: "Which client-side technique handles user interactions like mouse clicks or keyboard inputs?", 
        options: ["Event handling", "Form validation", "Responsive design", "Browser compatibility"], 
        answer: 0, 
        explanation: "Event handling executes JavaScript code in response to specific events like clicks or keypresses."
    },
    { 
        q: "Which client-side technique ensures web pages display correctly across devices?", 
        options: ["Event handling", "Form validation", "Responsive design", "Browser compatibility"], 
        answer: 2, 
        explanation: "Responsive design adapts layout and design to different screen sizes for proper display on all devices."
    },
    { 
        q: "Which technique sends and receives data between browser and server in JSON format?", 
        options: ["AJAX", "Websockets", "RESTful API", "Bootstrap"], 
        answer: 0, 
        explanation: "AJAX allows asynchronous data communication in JSON format without reloading the page."
    },
    { 
        q: "Which library enhances UI with interactive tooltips, modals, and other components?", 
        options: ["jQuery", "React", "Angular", "Vue.js"], 
        answer: 0, 
        explanation: "jQuery simplifies DOM manipulation and provides interactive UI components like modals and tooltips."
    },
    { 
        q: "Which client-side technique is used to create visually appealing and responsive layouts?", 
        options: ["HTML", "CSS", "JavaScript", "PHP"], 
        answer: 1, 
        explanation: "CSS defines the presentation and styling of HTML elements to create visually appealing, responsive layouts."
    },
    { 
        q: "Which technique optimizes page speed by preloading resources in advance?", 
        options: ["Compression", "Minification", "Caching", "Preloading"], 
        answer: 3, 
        explanation: "Preloading fetches and caches resources like images or scripts in advance to reduce latency."
    },
    { 
        q: "Which client-side technique ensures correct display in different browsers?", 
        options: ["Event handling", "Form validation", "Responsive design", "Browser compatibility"], 
        answer: 3, 
        explanation: "Browser compatibility ensures consistent display across multiple web browsers."
    },
    { 
        q: "What is the purpose of HTML in web programming?", 
        options: ["Control visual appearance", "Handle server-side processing", "Specify structure and content", "Add interactivity"], 
        answer: 2, 
        explanation: "HTML defines the structure and content of web pages using tags and elements."
    },
    { 
        q: "Which HTML element creates a heading?", 
        options: ["<p>", "<div>", "<h1>", "<a>"], 
        answer: 2, 
        explanation: "<h1> creates the main heading of a web page."
    },
    { 
        q: "Which HTML element creates a paragraph?", 
        options: ["<h1>", "<div>", "<p>", "<a>"], 
        answer: 2, 
        explanation: "<p> defines a block of text or content as a paragraph."
    },
    { 
        q: "Which HTML element creates an unordered list?", 
        options: ["<ul>", "<li>", "<ol>", "<a>"], 
        answer: 0, 
        explanation: "<ul> defines a list of items without a specific order."
    },
    { 
        q: "Which HTML element creates a link?", 
        options: ["<h1>", "<div>", "<p>", "<a>"], 
        answer: 3, 
        explanation: "<a> creates a hyperlink to another page or location."
    },
    { 
        q: "Which CSS property controls spacing between elements?", 
        options: ["color", "font-size", "margin", "padding"], 
        answer: 2, 
        explanation: "Margin defines space outside the border of an element."
    },
    { 
        q: "Which CSS property changes text color?", 
        options: ["color", "font-size", "margin", "padding"], 
        answer: 0, 
        explanation: "The color property sets the text color using names, hex, or RGB values."
    },
    { 
        q: "Which CSS property changes text size?", 
        options: ["color", "font-size", "margin", "padding"], 
        answer: 1, 
        explanation: "font-size sets the size of text in pixels, percentages, or other units."
    },
    { 
        q: "Which CSS property aligns content vertically?", 
        options: ["text-align", "vertical-align", "align-content", "justify-content"], 
        answer: 1, 
        explanation: "vertical-align aligns content vertically within containers, often used in table cells or inline elements."
    },
    { 
        q: "Which CSS property creates a border around an element?", 
        options: ["color", "font-size", "border", "padding"], 
        answer: 2, 
        explanation: "The border property defines a border around an element."
    }





        // Add remaining 2016 exam questions here
    ],


"2017": [


{
    q: "A language can be generated from simple primitive language in a simple way if and only if",
    options: [
        "It is recognized by a device of infinite states",
        "It takes no auxiliary memory",
        "All of the mentioned",
        "None of the mentioned"
    ],
    answer: 1,
    explanation: "A language can be generated from a simple primitive language if it requires no auxiliary memory for generation."
},
{
    q: "Which forms have a relation that contains information about a single entity?",
    options: ["4NF", "2NF", "5NF", "3NF"],
    answer: 0,
    explanation: "4NF ensures that there are no multi-valued dependencies and relates to a single entity per relation."
},
{
    q: "Among the given options, which search algorithm requires less memory?",
    options: ["Optimal Search", "Depth First Search", "Breadth-First Search", "Linear Search"],
    answer: 1,
    explanation: "Depth First Search uses a stack and requires less memory than Breadth-First Search which uses a queue for all nodes at a level."
},
{
    q: "The FCFS algorithm is particularly troublesome for ____________",
    options: ["multiprocessor systems", "Operating Systems", "time sharing systems", "multiprogramming systems"],
    answer: 2,
    explanation: "FCFS scheduling can cause long waiting times in time-sharing systems due to lack of preemption."
},
{
    q: "Which of the following tag is used to create a combo box (or drop-down box)?",
    options: ["<list>", "<select>", "<input type = \"dropdown\">", "<ul>"],
    answer: 2,
    explanation: "In HTML, a drop-down box can be created using <input type='dropdown'> in some interpretations, though <select> is standard."
},
{
    q: "Which AI technique enables the computers to understand the associations and relationships between objects and events?",
    options: ["Heuristic Processing", "Cognitive Science", "Relative Symbolism", "Pattern Matching"],
    answer: 3,
    explanation: "Pattern matching allows AI systems to detect relationships and associations between objects or events."
},
{
    q: "Linked lists are not suitable for the implementation of ___________",
    options: ["Insertion sort", "Radix sort", "Polynomial manipulation", "Binary search"],
    answer: 3,
    explanation: "Binary search requires direct access to middle elements, which linked lists cannot provide efficiently."
},
{
    q: "What kind of linked list is best to answer questions like “What is the item at position n?”",
    options: ["Singly linked list", "Doubly linked list", "Circular linked list", "Array implementation of linked list"],
    answer: 3,
    explanation: "Array implementation provides O(1) access to any position, unlike linked lists which require traversal."
},
{
    q: "Which of the following layers is an addition to OSI model when compared with TCP/IP model?",
    options: ["Application layer", "Presentation layer", "Session layer", "Session and Presentation layer"],
    answer: 3,
    explanation: "The OSI model has Presentation and Session layers, which are not present separately in the TCP/IP model."
},
{
    q: "What is the result of the following program?\npublic static synchronized void main(String[] args) throws InterruptedException {\n Thread f = new Thread();\n f.start();\n System.out.print(\"A\");\n f.wait(1000);\n System.out.print(\"B\");\n}",
    options: ["It prints A and B with a 1000 seconds delay between them", "It only prints A and exits", "It only prints B and exits", "A will be printed, and then an exception is thrown"],
    answer: 3,
    explanation: "Calling wait() on a Thread without synchronization on the object's monitor causes an IllegalMonitorStateException after printing 'A'."
},
{
    q: "To obtain a prefix expression, which of the tree traversals is used?",
    options: ["Level-order traversal", "Pre-order traversal", "Post-order traversal", "In-order traversal"],
    answer: 1,
    explanation: "Pre-order traversal is used to obtain the prefix expression of an expression tree."
},
{
    q: "The total number of states required to automate the given regular expression (00)*(11)*",
    options: ["3", "4", "5", "6"],
    answer: 2,
    explanation: "The regular expression (00)*(11)* requires 5 states to be recognized by a finite automaton."
},
{
    q: "______________ is a set of one or more attributes taken collectively to uniquely identify a record.",
    options: ["Primary Key", "Foreign Key", "Super key", "Candidate key"],
    answer: 2,
    explanation: "A Super key is any set of attributes that can uniquely identify a record in a relation."
},
{
    q: "Which one of the following can be considered as the class of computer threats?",
    options: ["Dos Attack", "Phishing", "Soliciting", "Both A and C"],
    answer: 0,
    explanation: "Denial of Service (Dos) attack is a well-known type of computer threat."
},
{
    q: "Which method of the Class.class is used to determine the name of a class represented by the class object as a String?",
    options: ["getClass()", "intern()", "getName()", "toString()"],
    answer: 2,
    explanation: "getName() returns the fully qualified name of the class represented by the Class object."
},
{
    q: "Which among the following doesn’t come under OOP concept?",
    options: ["Data hiding", "Message passing", "Platform independent", "Data binding"],
    answer: 2,
    explanation: "Platform independence is a feature of languages like Java, but not an OOP concept."
},
{
    q: "Auxiliary memory can be defined as",
    options: ["A memory unit that directly communicate with CPU", "A device that provide backup storage", "It is a fastest memory", "All"],
    answer: 1,
    explanation: "Auxiliary memory is external storage like hard disks or flash drives used for backup or large storage."
},
{
    q: "The portion of the process scheduler in an operating system that dispatches processes is concerned with ____________",
    options: ["assigning ready processes to waiting queue", "assigning running processes to blocked queue", "assigning ready processes to CPU", "all of the mentioned"],
    answer: 2,
    explanation: "The dispatcher component of the scheduler assigns ready processes to the CPU for execution."
},
{
    q: "Given pointer to a node X in a singly linked list. Only one pointer is given, pointer to head node is not given, can we delete the node X from given linked list?",
    options: ["Possible if X is not last node", "Possible if X is not first node", "Possible if size of linked list is even", "Possible if size of linked list is odd"],
    answer: 0,
    explanation: "We can delete a node in a singly linked list if we have its pointer, only if it’s not the last node."
},
{
    q: "Which of the following is the task of lexical analysis?",
    options: ["To build the uniform symbol table", "To initialize the variables", "To organize the variables in a lexical order", "None of the mentioned"],
    answer: 0,
    explanation: "Lexical analysis converts source code into tokens and builds a uniform symbol table for parsing."
},
{
    q: "Which of the following is generally used for performing tasks like creating the structure of the relations, deleting relation?",
    options: ["DML(Data Manipulation Language)", "Query", "Relational Schema", "DDL(Data Definition Language)"],
    answer: 3,
    explanation: "DDL commands are used to define and modify database structures such as creating or deleting tables."
},



{
    q: "Which one of the following data structures are preferred in database-system implementation?",
    options: ["AVL tree", "B-tree", "B+ -tree", "Splay tree"],
    answer: 2,
    explanation: "B+ trees are widely used in database systems because they provide efficient indexing and range queries."
},
{
    q: "Rows of a relation are known as the _______.",
    options: ["Degree", "Tuples", "Entity", "All of the above"],
    answer: 3,
    explanation: "Rows in a relational table are called tuples. They represent entities and collectively contribute to the degree of a relation."
},
{
    q: "Which of the following refers to stealing one's idea or invention of others and use it for their own benefits?",
    options: ["Piracy", "Plagiarism", "Intellectual property rights", "All of the above"],
    answer: 3,
    explanation: "All of the listed actions involve unauthorized use of others' work for personal benefit."
},
{
    q: "Which of the following is the minimum number of transitions to pass to reach the final state as per the regular expression {a,b}*{baaa}?",
    options: ["4", "5", "6", "3"],
    answer: 0,
    explanation: "The minimum number of transitions to reach the final state for {a,b}*{baaa} is 4."
},
{
    q: "_________________is a combinational circuit that receives binary information from one of the 2^n input lines and directs it to a single output line.",
    options: ["Decoder", "Multiplexer", "Encoder", "Flip flop"],
    answer: 1,
    explanation: "A multiplexer selects one of many input lines and forwards it to a single output line."
},
{
    q: "What is the output of int x = 3; int y = 5; cout << (x==y);",
    options: ["1", "0", "true", "false"],
    answer: 1,
    explanation: "x==y evaluates to false. In C++, false is printed as 0."
},
{
    q: "Which AI technique enables the computers to understand the associations and relationships between objects and events?",
    options: ["Heuristic Processing", "Cognitive Science", "Relative Symbolism", "Pattern Matching"],
    answer: 3,
    explanation: "Pattern matching helps computers recognize associations and relationships between data points."
},
{
    q: "Which of the following tag is used to create a combo box (or drop-down box) in HTML?",
    options: ["<list>", "<select>", "<input type='dropdown'>", "<ul>"],
    answer: 1,
    explanation: "The <select> tag is used in HTML to create a drop-down list."
},
{
    q: "Among the given options, which search algorithm requires less memory?",
    options: ["Optimal Search", "Depth First Search", "Breadth-First Search", "Linear Search"],
    answer: 1,
    explanation: "Depth First Search uses less memory compared to Breadth First Search because it stores fewer nodes in the stack."
},
{
    q: "The FCFS algorithm is particularly troublesome for ____________",
    options: ["multiprocessor systems", "Operating Systems", "time sharing systems", "multiprogramming systems"],
    answer: 2,
    explanation: "First-Come-First-Serve (FCFS) scheduling can cause long waiting times in time-sharing systems due to the convoy effect."
},
{
    q: "Which forms have a relation that contains information about a single entity?",
    options: ["4NF", "2NF", "5NF", "3NF"],
    answer: 0,
    explanation: "Fourth Normal Form (4NF) ensures that a relation contains information about a single entity without multi-valued dependencies."
},


{
    q: "A language can be generated from simple primitive language in a simple way if and only if",
    options: ["It is recognized by a device of infinite states", "It takes no auxiliary memory", "All of the mentioned", "None of the mentioned"],
    answer: 1,
    explanation: "A language can be generated simply if it does not require auxiliary memory."
},
{
    q: "Which AI technique enables the computers to understand the associations and relationships between objects and events?",
    options: ["Heuristic Processing", "Cognitive Science", "Relative Symbolism", "Pattern Matching"],
    answer: 3,
    explanation: "Pattern matching allows computers to recognize associations and relationships between data points."
},
{
    q: "Which of the following is the correct way to create an array in PHP?",
    options: ["$season = array[\"summer\" , \"winter\" , \"spring\" , \"autumn\"];", "$season = array(\"summer\" , \"winter\" , \"spring\" , \"autumn\")", "$season = \"summer\" , \"winter\" , \"spring\" , \"autumn\";", "All of the above"],
    answer: 1,
    explanation: "In PHP, arrays are created using array() function syntax."
},
{
    q: "The FCFS algorithm is particularly troublesome for ____________",
    options: ["multiprocessor systems", "Operating Systems", "time sharing systems", "multiprogramming systems"],
    answer: 2,
    explanation: "First-Come-First-Serve (FCFS) scheduling can cause long waiting times in time-sharing systems due to the convoy effect."
},
{
    q: "Which forms have a relation that contains information about a single entity?",
    options: ["4NF", "2NF", "5NF", "3NF"],
    answer: 0,
    explanation: "Fourth Normal Form (4NF) ensures that a relation contains information about a single entity without multi-valued dependencies."
},
{
    q: "Among the given options, which search algorithm requires less memory?",
    options: ["Optimal Search", "Depth First Search", "Breadth-First Search", "Linear Search"],
    answer: 1,
    explanation: "Depth First Search uses less memory compared to Breadth First Search because it stores fewer nodes in the stack."
},
{
    q: "What kind of linked list is best to answer questions like 'What is the item at position n?'",
    options: ["Singly linked list", "Doubly linked list", "Circular linked list", "Array implementation of linked list"],
    answer: 3,
    explanation: "An array-based implementation allows direct access to the nth element efficiently, unlike linked lists."
},
{
    q: "Which of the following layers is an addition to OSI model when compared with TCP/IP model?",
    options: ["Application layer", "Presentation layer", "Session layer", "Session and Presentation layer"],
    answer: 3,
    explanation: "TCP/IP does not have Presentation and Session layers. OSI adds them to handle data representation and session management."
},
{
    q: "What is the result of the following Java program? public static synchronized void main(String[] args) throws InterruptedException { Thread f = new Thread(); f.start(); System.out.print(\"A\"); f.wait(1000); System.out.print(\"B\"); }",
    options: ["It prints A and B with a 1000 seconds delay between them", "It only prints A and exits", "It only prints B and exits", "A will be printed, and then an exception is thrown"],
    answer: 3,
    explanation: "Calling wait() without synchronizing on the object f causes IllegalMonitorStateException after printing A."
},
{
    q: "To obtain a prefix expression, which of the tree traversals is used?",
    options: ["Level-order traversal", "Pre-order traversal", "Post-order traversal", "In-order traversal"],
    answer: 1,
    explanation: "Pre-order traversal of a binary expression tree gives the prefix expression."
},
{
    q: "The total number of states required to automate the given regular expression (00)*(11)*",
    options: ["3", "4", "5", "6"],
    answer: 2,
    explanation: "The minimal DFA for (00)*(11)* requires 5 states to handle all valid sequences."
},
{
    q: "______________ is a set of one or more attributes taken collectively to uniquely identify a record.",
    options: ["Primary Key", "Foreign key", "Super key", "Candidate key"],
    answer: 2,
    explanation: "A super key is any set of attributes that uniquely identifies a record in a relation."
},
{
    q: "Which one of the following can be considered as the class of computer threats?",
    options: ["Dos Attack", "Phishing", "Soliciting", "Both A and C"],
    answer: 0,
    explanation: "Denial of Service (DoS) attack is a well-known class of computer threats."
},
{
    q: "The PEAS in the task environment is about____________.",
    options: ["Peer, Environment, Actuators, Sense", "Performance, Environment, Actuators, Sensors", "Perceiving, Environment, Actuators, Sensors", "None of the above"],
    answer: 1,
    explanation: "PEAS stands for Performance measure, Environment, Actuators, and Sensors, defining the agent task environment in AI."
},
{
    q: "Which among the following doesn’t come under OOP concept?",
    options: ["Data hiding", "Message passing", "Platform independent", "Data binding"],
    answer: 2,
    explanation: "Platform independence is a property of programming languages (like Java), not a core OOP concept."
},
{
    q: "Auxiliary memory can be defined as",
    options: ["A memory unit that directly communicate with CPU", "A device that provide backup storage", "It is a fastest memory", "All"],
    answer: 1,
    explanation: "Auxiliary memory is secondary storage, such as hard disks or SSDs, used to back up or extend main memory."
},
{
    q: "The portion of the process scheduler in an operating system that dispatches processes is concerned with ____________",
    options: ["assigning ready processes to waiting queue", "assigning running processes to blocked queue", "assigning ready processes to CPU", "all of the mentioned"],
    answer: 2,
    explanation: "The dispatcher component of the scheduler assigns ready processes to the CPU for execution."
},
{
    q: "Given pointer to a node X in a singly linked list. Only one pointer is given, pointer to head node is not given, can we delete the node X from given linked list?",
    options: ["Possible if X is not last node", "Possible if X is not first node", "Possible if size of linked list is even", "Possible if size of linked list is odd"],
    answer: 0,
    explanation: "In a singly linked list, a node can only be deleted if it's not the last node, using a copy-and-delete-next technique."
},
{
    q: "Which of the following is the task of lexical analysis?",
    options: ["To build the uniform symbol table", "To initialize the variables", "To organize the variables in a lexical order", "None of the mentioned"],
    answer: 0,
    explanation: "Lexical analysis generates tokens and maintains a symbol table for identifiers and constants."
},
{
    q: "What is encapsulation in object oriented Programming?",
    options: ["It is a way of combining various data members and member functions that operate on those data members into a single unit", "It is a way of combining various data members and member functions into a single unit which can operate on any data", "It is a way of combining various data members into a single unit", "It is a way of combining various member functions into a single unit"],
    answer: 0,
    explanation: "Encapsulation combines data and methods into a single unit (class) and restricts direct access to some components."
},
{
    q: "Which of the following is generally used for performing tasks like creating the structure of the relations, deleting relation?",
    options: ["DML(Data Manipulation Language)", "Query", "Relational Schema", "DDL(Data Definition Language)"],
    answer: 3,
    explanation: "DDL commands define and manage database structure, like CREATE and DROP commands."
},
{
    q: "Which one of the following data structures are preferred in database-system implementation?",
    options: ["AVL tree", "B-tree", "B+ -tree", "Splay tree"],
    answer: 2,
    explanation: "B+ trees are optimized for disk storage and are widely used for indexing in database systems."
},
{
    q: "Rows of a relation are known as the _______.",
    options: ["Degree", "Tuples", "Entity", "All of the above"],
    answer: 3,
    explanation: "Rows in a relational table are called tuples and represent individual entities; collectively they define the relation."
},
{
    q: "Which of the following statements is not true? Every language defined by a regular expression can be represented using a DFA",
    options: ["True", "False"],
    answer: 0,
    explanation: "Not every regular expression can be directly represented using a DFA; NFAs are more direct, and conversion to DFA is sometimes complex."
},
{
    q: "Which of the following can be used to extract or filter the data & information from the data warehouse?",
    options: ["Data redundancy", "Data recovery tool", "Data mining", "Both B and C"],
    answer: 2,
    explanation: "Data mining techniques are used to extract useful patterns and knowledge from large datasets in data warehouses."
},

{
    q: "Which is used to find errors and fix them in a program?",
    options: ["Compiler", "Debugger", "Interpreter", "Assembler"],
    answer: 1,
    explanation: "A debugger helps programmers find and fix errors in their code."
},
{
    q: "Which of the following is NOT a primary component of a CPU?",
    options: ["ALU", "Control Unit", "Memory Unit", "Registers"],
    answer: 2,
    explanation: "Memory unit is considered separate from the CPU; ALU, Control Unit, and Registers are main CPU components."
},
{
    q: "Which of the following is true for a stack?",
    options: ["FIFO", "LIFO", "Random Access", "Sorted Access"],
    answer: 1,
    explanation: "Stack follows Last In, First Out (LIFO) order."
},
{
    q: "Which protocol is used to send email from one server to another?",
    options: ["HTTP", "FTP", "SMTP", "POP3"],
    answer: 2,
    explanation: "SMTP (Simple Mail Transfer Protocol) is used to send emails between servers."
},
{
    q: "Which of the following is NOT a type of database model?",
    options: ["Hierarchical", "Network", "Object-oriented", "HTML"],
    answer: 3,
    explanation: "HTML is a markup language, not a database model."
},
{
    q: "Which type of memory is volatile and used for temporary storage?",
    options: ["ROM", "RAM", "Cache", "Flash"],
    answer: 1,
    explanation: "RAM (Random Access Memory) is volatile and stores data temporarily."
},
{
    q: "Which of the following is true about a compiler?",
    options: ["Translates entire program at once", "Translates line by line", "Executes code directly", "None of the above"],
    answer: 0,
    explanation: "A compiler translates the whole program at once before execution."
},
{
    q: "Which network topology uses a central hub to connect all devices?",
    options: ["Bus", "Ring", "Star", "Mesh"],
    answer: 2,
    explanation: "In star topology, all devices are connected to a central hub."
},
{
    q: "Which of the following is used to prevent unauthorized access to a network?",
    options: ["Router", "Firewall", "Switch", "Hub"],
    answer: 1,
    explanation: "A firewall monitors and controls incoming and outgoing network traffic to protect against unauthorized access."
},
{
    q: "Which of the following is NOT a characteristic of object-oriented programming?",
    options: ["Inheritance", "Polymorphism", "Encapsulation", "Compilation"],
    answer: 3,
    explanation: "Compilation is not a core concept of OOP; it is a process of converting code to executable form."
},
{
    q: "Which data structure is used for BFS (Breadth-First Search)?",
    options: ["Stack", "Queue", "Priority Queue", "Tree"],
    answer: 1,
    explanation: "BFS uses a queue to process nodes level by level."
},
{
    q: "Which of the following is used to store key-value pairs in JavaScript?",
    options: ["Array", "Object", "Set", "Map"],
    answer: 1,
    explanation: "Objects in JavaScript store data in key-value pairs."
},
{
    q: "Which of the following is NOT part of the software development life cycle?",
    options: ["Design", "Implementation", "Execution", "Testing"],
    answer: 2,
    explanation: "Execution is not a phase in SDLC; SDLC includes Planning, Analysis, Design, Implementation, and Testing."
},
{
    q: "Which of the following is an example of a markup language?",
    options: ["JavaScript", "Python", "HTML", "C++"],
    answer: 2,
    explanation: "HTML is a markup language used to structure web pages."
},
{
    q: "Which scheduling algorithm may cause starvation in long processes?",
    options: ["FCFS", "SJF", "Round Robin", "Priority Scheduling"],
    answer: 1,
    explanation: "Shortest Job First (SJF) may starve long processes if shorter jobs keep coming."
},
{
    q: "Which one of the following is an example of secondary storage?",
    options: ["RAM", "Cache", "Hard Disk", "Registers"],
    answer: 2,
    explanation: "Hard Disk is secondary storage; RAM and Cache are primary storage."
},
{
    q: "Which of the following statements about TCP is correct?",
    options: ["Connectionless", "Reliable", "Unreliable", "Only used in LAN"],
    answer: 1,
    explanation: "TCP (Transmission Control Protocol) is connection-oriented and reliable."
},
{
    q: "Which of the following is an advantage of a linked list over an array?",
    options: ["Random access", "Dynamic size", "Less memory usage", "Faster access to elements"],
    answer: 1,
    explanation: "Linked lists can dynamically grow or shrink in size, unlike arrays."
},
{
    q: "Which of the following is NOT a type of cloud service?",
    options: ["IaaS", "PaaS", "SaaS", "DBaaS"],
    answer: 3,
    explanation: "DBaaS is a specific service for databases, not a core cloud model; IaaS, PaaS, SaaS are main types."
},
{
    q: "Which of the following is used to connect devices in a WAN?",
    options: ["Switch", "Router", "Hub", "NIC"],
    answer: 1,
    explanation: "Routers are used to connect different networks over wide area networks (WAN)."
},
{
    q: "Which of the following is true about recursion?",
    options: ["Every recursive function must have a base case", "Recursive functions cannot call themselves", "Recursion is always inefficient", "Recursion cannot be implemented in JavaScript"],
    answer: 0,
    explanation: "Recursion must include a base case to terminate; otherwise it will cause infinite calls."
},
{
    q: "Which of the following is NOT a relational database constraint?",
    options: ["Primary Key", "Foreign Key", "Unique Key", "Loop Key"],
    answer: 3,
    explanation: "Loop Key is not a valid relational database constraint."
},
{
    q: "Which type of backup stores all files that have changed since the last backup?",
    options: ["Full backup", "Incremental backup", "Differential backup", "Mirror backup"],
    answer: 1,
    explanation: "Incremental backup saves only files changed since the last backup."
},
{
    q: "Which one of the following is NOT a networking device?",
    options: ["Hub", "Switch", "Router", "Compiler"],
    answer: 3,
    explanation: "Compiler is a software tool, not a networking device."
},
{
    q: "Which of the following is true for a circular queue?",
    options: ["Front never changes", "Rear never changes", "Front and Rear wrap around", "Queue cannot overflow"],
    answer: 2,
    explanation: "In a circular queue, Front and Rear wrap around to reuse empty spaces."
},
{
    q: "Which of the following sorting algorithms is stable?",
    options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
    answer: 2,
    explanation: "Merge Sort maintains relative order of equal elements, making it stable."
},
{
    q: "Which of the following is NOT a type of computer network?",
    options: ["LAN", "WAN", "MAN", "PANADA"],
    answer: 3,
    explanation: "PANADA is not a type of computer network."
},
{
    q: "Which one of the following is used to define rules for syntax of programming languages?",
    options: ["Lexical Analysis", "Syntax Analysis", "Semantic Analysis", "Code Generation"],
    answer: 1,
    explanation: "Syntax Analysis checks the syntax rules of programming languages."
},
{
    q: "Which type of database joins returns only matching records from both tables?",
    options: ["Inner Join", "Outer Join", "Left Join", "Right Join"],
    answer: 0,
    explanation: "Inner Join returns only records that have matching values in both tables."
},
{
    q: "Which of the following is a valid JavaScript variable declaration?",
    options: ["var x = 10;", "let x = 10;", "const x = 10;", "All of the above"],
    answer: 3,
    explanation: "All three forms (var, let, const) are valid variable declarations in JavaScript."
},





{ q: "Which of the following is a volatile memory?", options: ["ROM", "RAM", "Flash", "Hard Disk"], answer: 1, explanation: "RAM is volatile and loses data when power is off." },
{ q: "Which of the following is used to uniquely identify a computer on a network?", options: ["IP Address", "MAC Address", "Subnet Mask", "Gateway"], answer: 0, explanation: "An IP Address uniquely identifies a device on a network." },
{ q: "Which of the following protocols is used for secure web browsing?", options: ["HTTP", "HTTPS", "FTP", "SMTP"], answer: 1, explanation: "HTTPS encrypts web traffic for secure communication." },
{ q: "Which of the following is a loop structure in programming?", options: ["if", "for", "switch", "break"], answer: 1, explanation: "The for loop is used for iterative execution." },
{ q: "Which of the following is used to connect multiple networks?", options: ["Hub", "Switch", "Router", "NIC"], answer: 2, explanation: "Routers connect multiple networks together." },
{ q: "Which of the following is NOT a type of software?", options: ["System Software", "Application Software", "Utility Software", "Hardware"], answer: 3, explanation: "Hardware is a physical component, not software." },
{ q: "Which of the following is used to manage database transactions?", options: ["DBMS", "Compiler", "Interpreter", "Assembler"], answer: 0, explanation: "DBMS manages database transactions and data integrity." },
{ q: "Which of the following is an example of a high-level programming language?", options: ["C", "Assembly", "Machine Code", "Binary"], answer: 0, explanation: "C is a high-level programming language." },
{ q: "Which of the following is used to represent data in binary form?", options: ["Bits", "Bytes", "Nibbles", "All of the above"], answer: 3, explanation: "Bits, bytes, and nibbles are all units of binary data." },
{ q: "Which of the following is used for wireless communication?", options: ["Ethernet", "Wi-Fi", "Fiber Optic", "Coaxial Cable"], answer: 1, explanation: "Wi-Fi is used for wireless communication." },
{ q: "Which of the following sorting algorithms has the best average-case performance?", options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"], answer: 1, explanation: "Quick Sort is efficient and has O(n log n) average-case performance." },
{ q: "Which of the following is a primary key constraint?", options: ["Ensures uniqueness", "Allows nulls", "Duplicate values allowed", "None of the above"], answer: 0, explanation: "A primary key ensures uniqueness and cannot be null." },
{ q: "Which of the following is NOT a type of cloud computing service?", options: ["IaaS", "PaaS", "SaaS", "CaaS"], answer: 3, explanation: "CaaS is not a main type of cloud computing service." },
{ q: "Which of the following is a protocol used to receive emails?", options: ["SMTP", "IMAP", "HTTP", "FTP"], answer: 1, explanation: "IMAP is used to retrieve emails from a server." },
{ q: "Which of the following is NOT a characteristic of a good algorithm?", options: ["Correctness", "Finiteness", "Efficiency", "Complexity"], answer: 3, explanation: "Complexity alone is not a required characteristic; good algorithms are correct, finite, and efficient." },
{ q: "Which of the following is a characteristic of a real-time system?", options: ["Delayed responses", "Predictable timing", "Slow execution", "Batch processing"], answer: 1, explanation: "Real-time systems have predictable and timely responses." },
{ q: "Which of the following is used to connect computers in a LAN?", options: ["Router", "Hub", "Switch", "Both Hub and Switch"], answer: 3, explanation: "Both hubs and switches can connect computers in a LAN." },
{ q: "Which of the following is used to store the BIOS settings?", options: ["RAM", "ROM", "CMOS", "Cache"], answer: 2, explanation: "CMOS stores BIOS settings and configuration." },
{ q: "Which of the following is true about IPv6?", options: ["32-bit address", "128-bit address", "64-bit address", "16-bit address"], answer: 1, explanation: "IPv6 uses 128-bit addresses for devices." },
{ q: "Which of the following is used to prevent data loss?", options: ["Firewall", "Backup", "Router", "Switch"], answer: 1, explanation: "Backups help prevent data loss in case of failure." },
{ q: "Which of the following is NOT a type of operating system?", options: ["Batch OS", "Time-sharing OS", "Real-time OS", "Compiler OS"], answer: 3, explanation: "Compiler is not an operating system type." },
{ q: "Which of the following is used to execute JavaScript in the browser?", options: ["Node.js", "Browser Engine", "PHP", "MySQL"], answer: 1, explanation: "The browser engine executes JavaScript code." },
{ q: "Which of the following is NOT a type of computer network topology?", options: ["Star", "Ring", "Bus", "File"], answer: 3, explanation: "File is not a network topology." },
{ q: "Which of the following is used to handle exceptions in programming?", options: ["Try-Catch", "If-Else", "Switch-Case", "For Loop"], answer: 0, explanation: "Try-Catch blocks are used to handle exceptions." },
{ q: "Which of the following is NOT an input device?", options: ["Keyboard", "Mouse", "Monitor", "Scanner"], answer: 2, explanation: "Monitor is an output device, not input." },
{ q: "Which of the following is a database management system?", options: ["Oracle", "Linux", "Python", "Java"], answer: 0, explanation: "Oracle is a popular DBMS software." },
{ q: "Which of the following is used to protect data from unauthorized access?", options: ["Encryption", "Decryption", "Compression", "Execution"], answer: 0, explanation: "Encryption secures data by making it unreadable without a key." },
{ q: "Which of the following is used for process scheduling in OS?", options: ["CPU", "Scheduler", "Memory", "Cache"], answer: 1, explanation: "The scheduler manages the execution of processes in an OS." },
{ q: "Which of the following is true about a semaphore in OS?", options: ["Used for synchronization", "Used for storage", "Used for networking", "Used for compilation"], answer: 0, explanation: "Semaphores are used to manage synchronization between processes." },
{ q: "Which of the following is a client-side scripting language?", options: ["PHP", "JavaScript", "Python", "Java"], answer: 1, explanation: "JavaScript runs on the client side in browsers." },
{ q: "Which of the following is NOT a type of machine learning?", options: ["Supervised", "Unsupervised", "Reinforcement", "Decompiled"], answer: 3, explanation: "Decompiled is unrelated to machine learning." },
{ q: "Which of the following is used to assign IP addresses dynamically?", options: ["DNS", "DHCP", "HTTP", "SMTP"], answer: 1, explanation: "DHCP dynamically assigns IP addresses to devices." },
{ q: "Which of the following is a protocol for transferring files?", options: ["FTP", "SMTP", "HTTP", "POP3"], answer: 0, explanation: "FTP is used to transfer files over networks." },
{ q: "Which of the following is true for a microprocessor?", options: ["Contains CPU", "Contains ALU", "Contains Registers", "All of the above"], answer: 3, explanation: "A microprocessor contains CPU components like ALU, CU, and Registers." },
{ q: "Which of the following is NOT a type of software testing?", options: ["Unit Testing", "Integration Testing", "System Testing", "CPU Testing"], answer: 3, explanation: "CPU Testing is hardware testing, not software testing." },
{ q: "Which of the following is a common database language?", options: ["SQL", "HTML", "CSS", "JavaScript"], answer: 0, explanation: "SQL is used to interact with databases." },
{ q: "Which of the following is NOT an OS command?", options: ["cd", "mkdir", "printf", "ls"], answer: 2, explanation: "printf is a programming language function, not an OS command." },
{ q: "Which of the following is used for web development backend?", options: ["PHP", "HTML", "CSS", "JavaScript Frontend"], answer: 0, explanation: "PHP is a server-side backend language." },
{ q: "Which of the following is used to compress files?", options: ["ZIP", "HTTP", "DNS", "SMTP"], answer: 0, explanation: "ZIP compresses files to save space." },
{ q: "Which of the following is a markup language?", options: ["HTML", "Python", "Java", "C++"], answer: 0, explanation: "HTML is used for defining web page structure." },
{ q: "Which of the following is used for version control?", options: ["Git", "Docker", "Linux", "MySQL"], answer: 0, explanation: "Git is used to track and manage code changes." },
{ q: "Which of the following is a NoSQL database?", options: ["MongoDB", "MySQL", "Oracle", "PostgreSQL"], answer: 0, explanation: "MongoDB is a popular NoSQL database." },
{ q: "Which of the following is NOT part of the OSI model?", options: ["Application Layer", "Network Layer", "Data Link Layer", "Software Layer"], answer: 3, explanation: "Software Layer is not part of the OSI model." },
{ q: "Which of the following is used to detect viruses in a computer?", options: ["Antivirus", "Firewall", "Router", "Switch"], answer: 0, explanation: "Antivirus software detects and removes malicious software." },
{ q: "Which of the following is NOT a database type?", options: ["Relational", "Hierarchical", "Object-Oriented", "Executable"], answer: 3, explanation: "Executable is a file type, not a database type." },
{ q: "Which of the following is used to connect a computer to the Internet?", options: ["NIC", "Router", "Modem", "All of the above"], answer: 3, explanation: "All listed devices are used for Internet connectivity." },








],

"2018":[

    { q: "Full form of IP?", options: ["Internet Protocol", "Internal Protocol", "Internet Program", "Internal Program"], answer: 0, explanation: "IP stands for Internet Protocol." },
    { q: "Which is NOT an input device?", options: ["Keyboard", "Mouse", "Monitor", "Scanner"], answer: 2, explanation: "Monitor is an output device, not input." },
    { q: "Which is scripting language?", options: ["Python", "C++", "Java", "HTML"], answer: 0, explanation: "Python is a scripting language." },
    { q: "Which is markup language?", options: ["HTML", "CSS", "Python", "Java"], answer: 0, explanation: "HTML is a markup language." },
    { q: "Which of the following is a volatile memory?", options: ["ROM", "RAM", "Flash", "Hard Disk"], answer: 1, explanation: "RAM is volatile and loses data when power is off." },
    { q: "Which of the following is used to uniquely identify a computer on a network?", options: ["IP Address", "MAC Address", "Subnet Mask", "Gateway"], answer: 0, explanation: "An IP Address uniquely identifies a device on a network." },
    { q: "Which of the following protocols is used for secure web browsing?", options: ["HTTP", "HTTPS", "FTP", "SMTP"], answer: 1, explanation: "HTTPS encrypts web traffic for secure communication." },
    { q: "Which of the following is a loop structure in programming?", options: ["if", "for", "switch", "break"], answer: 1, explanation: "The for loop is used for iterative execution." },
    { q: "Which of the following is used to connect multiple networks?", options: ["Hub", "Switch", "Router", "NIC"], answer: 2, explanation: "Routers connect multiple networks together." },
    { q: "Which of the following is NOT a type of software?", options: ["System Software", "Application Software", "Utility Software", "Hardware"], answer: 3, explanation: "Hardware is a physical component, not software." },
    { q: "Which of the following is used to manage database transactions?", options: ["DBMS", "Compiler", "Interpreter", "Assembler"], answer: 0, explanation: "DBMS manages database transactions and data integrity." },
    { q: "Which of the following is an example of a high-level programming language?", options: ["C", "Assembly", "Machine Code", "Binary"], answer: 0, explanation: "C is a high-level programming language." },
    { q: "Which of the following is used to represent data in binary form?", options: ["Bits", "Bytes", "Nibbles", "All of the above"], answer: 3, explanation: "Bits, bytes, and nibbles are all units of binary data." },
    { q: "Which of the following is used for wireless communication?", options: ["Ethernet", "Wi-Fi", "Fiber Optic", "Coaxial Cable"], answer: 1, explanation: "Wi-Fi is used for wireless communication." },
    { q: "Which of the following sorting algorithms has the best average-case performance?", options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"], answer: 1, explanation: "Quick Sort is efficient and has O(n log n) average-case performance." },
    { q: "Which of the following is a primary key constraint?", options: ["Ensures uniqueness", "Allows nulls", "Duplicate values allowed", "None of the above"], answer: 0, explanation: "A primary key ensures uniqueness and cannot be null." },
    { q: "Which of the following is NOT a type of cloud computing service?", options: ["IaaS", "PaaS", "SaaS", "CaaS"], answer: 3, explanation: "CaaS is not a main type of cloud computing service." },
    { q: "Which of the following is a protocol used to receive emails?", options: ["SMTP", "IMAP", "HTTP", "FTP"], answer: 1, explanation: "IMAP is used to retrieve emails from a server." },
    { q: "Which of the following is NOT a characteristic of a good algorithm?", options: ["Correctness", "Finiteness", "Efficiency", "Complexity"], answer: 3, explanation: "Complexity alone is not a required characteristic; good algorithms are correct, finite, and efficient." },
    { q: "Which of the following is a characteristic of a real-time system?", options: ["Delayed responses", "Predictable timing", "Slow execution", "Batch processing"], answer: 1, explanation: "Real-time systems have predictable and timely responses." },
    { q: "Which of the following is used to connect computers in a LAN?", options: ["Router", "Hub", "Switch", "Both Hub and Switch"], answer: 3, explanation: "Both hubs and switches can connect computers in a LAN." },
    { q: "Which of the following is used to store the BIOS settings?", options: ["RAM", "ROM", "CMOS", "Cache"], answer: 2, explanation: "CMOS stores BIOS settings and configuration." },
    { q: "Which of the following is true about IPv6?", options: ["32-bit address", "128-bit address", "64-bit address", "16-bit address"], answer: 1, explanation: "IPv6 uses 128-bit addresses for devices." },
    { q: "Which of the following is used to prevent data loss?", options: ["Firewall", "Backup", "Router", "Switch"], answer: 1, explanation: "Backups help prevent data loss in case of failure." },
    { q: "Which of the following is NOT a type of operating system?", options: ["Batch OS", "Time-sharing OS", "Real-time OS", "Compiler OS"], answer: 3, explanation: "Compiler is not an operating system type." },
    { q: "Which of the following is used to execute JavaScript in the browser?", options: ["Node.js", "Browser Engine", "PHP", "MySQL"], answer: 1, explanation: "The browser engine executes JavaScript code." },
    { q: "Which of the following is NOT a type of computer network topology?", options: ["Star", "Ring", "Bus", "File"], answer: 3, explanation: "File is not a network topology." },
    { q: "Which of the following is used to handle exceptions in programming?", options: ["Try-Catch", "If-Else", "Switch-Case", "For Loop"], answer: 0, explanation: "Try-Catch blocks are used to handle exceptions." },
    { q: "Which of the following is NOT an input device?", options: ["Keyboard", "Mouse", "Monitor", "Scanner"], answer: 2, explanation: "Monitor is an output device, not input." },
    { q: "Which of the following is a database management system?", options: ["Oracle", "Linux", "Python", "Java"], answer: 0, explanation: "Oracle is a popular DBMS software." },
    { q: "Which of the following is used to protect data from unauthorized access?", options: ["Encryption", "Decryption", "Compression", "Execution"], answer: 0, explanation: "Encryption secures data by making it unreadable without a key." },
    { q: "Which of the following is used for process scheduling in OS?", options: ["CPU", "Scheduler", "Memory", "Cache"], answer: 1, explanation: "The scheduler manages the execution of processes in an OS." },
    { q: "Which of the following is true about a semaphore in OS?", options: ["Used for synchronization", "Used for storage", "Used for networking", "Used for compilation"], answer: 0, explanation: "Semaphores are used to manage synchronization between processes." },
    { q: "Which of the following is a client-side scripting language?", options: ["PHP", "JavaScript", "Python", "Java"], answer: 1, explanation: "JavaScript runs on the client side in browsers." },
    { q: "Which of the following is NOT a type of machine learning?", options: ["Supervised", "Unsupervised", "Reinforcement", "Decompiled"], answer: 3, explanation: "Decompiled is unrelated to machine learning." },
    { q: "Which of the following is used to assign IP addresses dynamically?", options: ["DNS", "DHCP", "HTTP", "SMTP"], answer: 1, explanation: "DHCP dynamically assigns IP addresses to devices." },
    { q: "Which of the following is a protocol for transferring files?", options: ["FTP", "SMTP", "HTTP", "POP3"], answer: 0, explanation: "FTP is used to transfer files over networks." },
    { q: "Which of the following is true for a microprocessor?", options: ["Contains CPU", "Contains ALU", "Contains Registers", "All of the above"], answer: 3, explanation: "A microprocessor contains CPU components like ALU, CU, and Registers." },
    { q: "Which of the following is NOT a type of software testing?", options: ["Unit Testing", "Integration Testing", "System Testing", "CPU Testing"], answer: 3, explanation: "CPU Testing is hardware testing, not software testing." },
    { q: "Which of the following is a common database language?", options: ["SQL", "HTML", "CSS", "JavaScript"], answer: 0, explanation: "SQL is used to interact with databases." },
    { q: "Which of the following is NOT an OS command?", options: ["cd", "mkdir", "printf", "ls"], answer: 2, explanation: "printf is a programming language function, not an OS command." },
    { q: "Which of the following is used for web development backend?", options: ["PHP", "HTML", "CSS", "JavaScript Frontend"], answer: 0, explanation: "PHP is a server-side backend language." },
    { q: "Which of the following is used to compress files?", options: ["ZIP", "HTTP", "DNS", "SMTP"], answer: 0, explanation: "ZIP compresses files to save space." },
    { q: "Which of the following is a markup language?", options: ["HTML", "Python", "Java", "C++"], answer: 0, explanation: "HTML is used for defining web page structure." },
    { q: "Which of the following is used for version control?", options: ["Git", "Docker", "Linux", "MySQL"], answer: 0, explanation: "Git is used to track and manage code changes." },
    { q: "Which of the following is a NoSQL database?", options: ["MongoDB", "MySQL", "Oracle", "PostgreSQL"], answer: 0, explanation: "MongoDB is a popular NoSQL database." },
    { q: "Which of the following is NOT part of the OSI model?", options: ["Application Layer", "Network Layer", "Data Link Layer", "Software Layer"], answer: 3, explanation: "Software Layer is not part of the OSI model." },
    { q: "Which of the following is used to detect viruses in a computer?", options: ["Antivirus", "Firewall", "Router", "Switch"], answer: 0, explanation: "Antivirus software detects and removes malicious software." },
    { q: "Which of the following is NOT a database type?", options: ["Relational", "Hierarchical", "Object-Oriented", "Executable"], answer: 3, explanation: "Executable is a file type, not a database type." },
    { q: "Which of the following is used to connect a computer to the Internet?", options: ["NIC", "Router", "Modem", "All of the above"], answer: 3, explanation: "All listed devices are used for Internet connectivity." },





    { q: "Which of the following is used to secure wireless networks?", options: ["WEP", "WPA", "WPA2", "All of the above"], answer: 3, explanation: "All WEP, WPA, and WPA2 are security protocols for wireless networks." },
    { q: "Which of the following is NOT a type of database join?", options: ["INNER JOIN", "OUTER JOIN", "SIDE JOIN", "LEFT JOIN"], answer: 2, explanation: "SIDE JOIN does not exist; INNER, OUTER, LEFT, and RIGHT JOIN are valid." },
    { q: "Which of the following is used to store temporary data for fast access?", options: ["Cache", "ROM", "HDD", "DVD"], answer: 0, explanation: "Cache memory stores frequently accessed data for quick access." },
    { q: "Which of the following is a front-end framework?", options: ["React", "Laravel", "Django", "Flask"], answer: 0, explanation: "React is a JavaScript front-end library/framework." },
    { q: "Which of the following is used to check network connectivity?", options: ["ping", "tracert", "ipconfig", "All of the above"], answer: 3, explanation: "All listed commands are used for network diagnostics." },
    { q: "Which of the following is NOT an operating system?", options: ["Windows", "Linux", "Python", "macOS"], answer: 2, explanation: "Python is a programming language, not an OS." },
    { q: "Which of the following is used for sending emails?", options: ["SMTP", "IMAP", "POP3", "HTTP"], answer: 0, explanation: "SMTP is used to send emails to servers." },
    { q: "Which of the following is a dynamic data structure?", options: ["Array", "Linked List", "Stack (fixed)", "Queue (fixed)"], answer: 1, explanation: "Linked List can grow and shrink dynamically." },
    { q: "Which of the following is used to uniquely identify a mobile device?", options: ["IP Address", "IMEI Number", "MAC Address", "Hostname"], answer: 1, explanation: "IMEI number is a unique identifier for mobile devices." },
    { q: "Which of the following is NOT a Python data type?", options: ["List", "Tuple", "Map", "Set"], answer: 2, explanation: "Python uses dictionaries, not Map as a type." },
    { q: "Which of the following is used to define a function in Python?", options: ["func", "function", "def", "define"], answer: 2, explanation: "'def' keyword is used to define a function in Python." },
    { q: "Which of the following is NOT a relational database?", options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"], answer: 2, explanation: "MongoDB is a NoSQL database." },
    { q: "Which of the following is used to prevent cross-site scripting (XSS)?", options: ["Input Validation", "Encryption", "Firewall", "Caching"], answer: 0, explanation: "Input validation prevents malicious scripts from running." },
    { q: "Which of the following is NOT a type of HTTP request method?", options: ["GET", "POST", "UPDATE", "DELETE"], answer: 2, explanation: "UPDATE is not an HTTP method; PUT is used instead." },
    { q: "Which of the following is a backend framework?", options: ["Node.js", "React", "Vue", "Angular"], answer: 0, explanation: "Node.js is used for backend/server-side development." },
    { q: "Which of the following is used to store cookies in a browser?", options: ["LocalStorage", "SessionStorage", "Cookies API", "All of the above"], answer: 3, explanation: "All of these methods can store data in a browser." },
    { q: "Which of the following is NOT a programming paradigm?", options: ["Object-Oriented", "Procedural", "Functional", "Hypertext"], answer: 3, explanation: "Hypertext is used in HTML, not a programming paradigm." },
    { q: "Which of the following is a version control system?", options: ["Git", "Jenkins", "Docker", "Kubernetes"], answer: 0, explanation: "Git is used to manage code versions." },
    { q: "Which of the following is NOT a NoSQL database?", options: ["MongoDB", "Cassandra", "Oracle", "CouchDB"], answer: 2, explanation: "Oracle is a relational database." },
    { q: "Which of the following is a function of an operating system?", options: ["Memory Management", "Process Scheduling", "Device Management", "All of the above"], answer: 3, explanation: "Operating system handles all these functions." },
    { q: "Which of the following is NOT a type of computer network?", options: ["LAN", "WAN", "MAN", "CAN"], answer: 3, explanation: "CAN is Controller Area Network, not a general-purpose computer network type." },
    { q: "Which of the following is used to encrypt messages?", options: ["AES", "SHA", "MD5", "HTML"], answer: 0, explanation: "AES is a symmetric encryption algorithm." },
    { q: "Which of the following is a Python web framework?", options: ["Django", "Laravel", "Spring", "Express"], answer: 0, explanation: "Django is a Python-based web framework." },
    { q: "Which of the following is used to deploy containerized applications?", options: ["Docker", "Git", "Nginx", "Apache"], answer: 0, explanation: "Docker is used for deploying containerized apps." },
    { q: "Which of the following is used to resolve domain names to IP addresses?", options: ["DNS", "DHCP", "HTTP", "FTP"], answer: 0, explanation: "DNS resolves domain names to IPs." },
    { q: "Which of the following is NOT a cybersecurity threat?", options: ["Virus", "Trojan", "Firewall", "Phishing"], answer: 2, explanation: "Firewall is a defense mechanism, not a threat." },
    { q: "Which of the following is used to monitor network traffic?", options: ["Wireshark", "Chrome", "Firefox", "Node.js"], answer: 0, explanation: "Wireshark is a network protocol analyzer." },
    { q: "Which of the following is used for container orchestration?", options: ["Kubernetes", "Docker", "Git", "Jenkins"], answer: 0, explanation: "Kubernetes is used to manage multiple containers." },
    { q: "Which of the following is a data structure used for LIFO operations?", options: ["Queue", "Stack", "Linked List", "Tree"], answer: 1, explanation: "Stack follows Last-In-First-Out (LIFO) principle." },
    { q: "Which of the following is a data structure used for FIFO operations?", options: ["Stack", "Queue", "Linked List", "Graph"], answer: 1, explanation: "Queue follows First-In-First-Out (FIFO) principle." },
    { q: "Which of the following is NOT a JavaScript framework?", options: ["React", "Angular", "Vue", "Django"], answer: 3, explanation: "Django is a Python framework." },
    { q: "Which of the following is used to manage sessions in web applications?", options: ["Cookies", "LocalStorage", "SessionStorage", "All of the above"], answer: 3, explanation: "All these methods can be used to manage sessions." },
    { q: "Which of the following is a semantic HTML tag?", options: ["<header>", "<div>", "<span>", "<b>"], answer: 0, explanation: "<header> is a semantic tag used to define page header." },
    { q: "Which of the following is NOT a front-end technology?", options: ["HTML", "CSS", "JavaScript", "MySQL"], answer: 3, explanation: "MySQL is a database, not front-end technology." },
    { q: "Which of the following is used to run Java applications?", options: ["JVM", "JDK", "JRE", "All of the above"], answer: 3, explanation: "JDK, JRE, and JVM are all required for Java applications." },
    { q: "Which of the following is NOT an advantage of cloud computing?", options: ["Scalability", "Cost Efficiency", "High Availability", "Limited Access"], answer: 3, explanation: "Limited access is not an advantage; cloud computing allows wide access." },
    { q: "Which of the following is NOT a type of algorithm?", options: ["Greedy", "Divide and Conquer", "Linear", "TCP"], answer: 3, explanation: "TCP is a protocol, not an algorithm." },
    { q: "Which of the following is a function of DNS?", options: ["Translate IP to domain", "Translate domain to IP", "Route network packets", "All of the above"], answer: 1, explanation: "DNS primarily translates domain names to IP addresses." },
    { q: "Which of the following is used for continuous integration?", options: ["Jenkins", "Docker", "Git", "Kubernetes"], answer: 0, explanation: "Jenkins is used for continuous integration and automation." },
    { q: "Which of the following is NOT a storage device?", options: ["HDD", "SSD", "RAM", "CPU"], answer: 3, explanation: "CPU is a processor, not storage." },
    { q: "Which of the following is a markup language used for documents?", options: ["HTML", "CSS", "JavaScript", "Python"], answer: 0, explanation: "HTML is used to structure web documents." },












]

};

let currentExam = [];
let currentIndex = 0;
let score = 0;

// Load selected exam
function loadExam(year) {
    currentExam = exams[year];
    currentIndex = 0;
    score = 0;
    document.getElementById('score-display').style.display = 'none';
    showQuestion();
}

// Display current question
function showQuestion() {
    if (currentIndex >= currentExam.length) {
        submitExam();
        return;
    }

    const qObj = currentExam[currentIndex];
    const questionText = document.getElementById('question-text');
    const optionsDiv = document.getElementById('options');
    const explanationDiv = document.getElementById('explanation');

    questionText.textContent = `Q${currentIndex + 1}. ${qObj.q}`;
    explanationDiv.style.display = 'none';
    explanationDiv.textContent = qObj.explanation;

    optionsDiv.innerHTML = '';
    qObj.options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.className = 'option-btn';
        btn.onclick = () => checkAnswer(idx);
        optionsDiv.appendChild(btn);
    });
}

// Check selected answer
function checkAnswer(selected) {
    const qObj = currentExam[currentIndex];
    const optionBtns = document.querySelectorAll('.option-btn');
    
    optionBtns.forEach((btn, idx) => {
        if(idx === qObj.answer) btn.style.backgroundColor = '#4CAF50'; // correct green
        else if(idx === selected) btn.style.backgroundColor = '#F44336'; // wrong red
        btn.disabled = true;
    });

    // Show explanation
    const explanationDiv = document.getElementById('explanation');
    explanationDiv.style.display = 'block';

    // Update score
    if(selected === qObj.answer) score++;
}

// Next question
function nextQuestion() {
    if(currentIndex < currentExam.length - 1){
        currentIndex++;
        showQuestion();
    }
}

// Previous question
function prevQuestion() {
    if(currentIndex > 0){
        currentIndex--;
        showQuestion();
    }
}

// Submit exam
function submitExam() {
    document.getElementById('question-text').textContent = `Exam Completed! Your score: ${score}/${currentExam.length}`;
    document.getElementById('options').innerHTML = '';
    document.getElementById('explanation').style.display = 'none';
    document.getElementById('score-display').style.display = 'block';
    document.getElementById('score-display').textContent = `You scored ${score} out of ${currentExam.length}`;
}







