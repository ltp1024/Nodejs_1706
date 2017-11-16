# Node.js Project for class 1706.
# TOC
   - [Class A](#class-a)
   - [Class B](#class-b)
   - [Class C](#class-c)
   - [Class D](#class-d)
   - [Class E](#class-e)
   - [Class F](#class-f)
<a name=""></a>

<a name="class-a"></a>
# Class A
equal.

```js
expect(1 + 1).to.be.equal(2);
```

no equal.

```js
expect(1 - 1).to.be.not.equal(1);
```

<a name="class-b"></a>
# Class B
true.

```js
expect(1).to.be.ok;
```

false.

```js
expect(0).to.be.not.ok;
```

false.

```js
expect({}).to.be.ok;
```

<a name="class-c"></a>
# Class C
type of string.

```js
expect('test...').to.be.a('string');
```

type of object.

```js
expect({}).to.be.an('object');
```

<a name="class-d"></a>
# Class D
include.

```js
expect([1,2,3]).to.include(1);
```

contain.

```js
expect('Hello world').to.contain('Hell');
```

include key.

```js
expect({k1:'v1',k2:'v2'}).to.include.keys('k1');
```

<a name="class-e"></a>
# Class E
empty.

```js
expect('').to.be.empty;
```

empty.

```js
expect([]).to.be.empty;
```

empty.

```js
expect({}).to.be.empty;
```

<a name="class-f"></a>
# Class F
match.

```js
expect('Hello,world!').to.match(/^hello/i);
```
