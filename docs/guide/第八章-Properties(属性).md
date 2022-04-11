# Properties

让我们先来看看以下的代码吧

```js
let sherlock = {
  surname: 'Holmes',
  address: { city: 'London' }
};
```

```js
let john = {
  surname: 'Watson',
  address: sherlock.address
};
```

```js
john.surname = 'Lennon';
john.address.city = 'Malibu';
```

```js
console.log(sherlock.surname); // ?
console.log(sherlock.address.city); // ?
console.log(john.surname); // ?
console.log(john.address.city); // ?
```

上面的答案是什么？，通过我们之前内容，尝试用JS的心智模型来回答它吧

```js
console.log(sherlock.surname); // "Holmes"
console.log(sherlock.address.city); // "Malibu"
console.log(john.surname); // "Lennon"
console.log(john.address.city); // "Malibu"
```

## Properties

> 我们之前讨论过Object，例如，这里有一个指向对象值的sherlock变量。我们通过写入{}来创建一个新的对象值

```js
let sherlock = {};
```

在JavaScript的宇宙中它应该看来是是这样的

![image-20220410192322504](https://tva1.sinaimg.cn/large/e6c9d24egy1h14uixekb7j20wc0c2q3b.jpg)

然而，对象主要用于将相关数据分组在一起。例如，我们可能想把关于sherlock的不同事实归类，要记住对象只是将数据封装分组，数据并不是属于对象

```js
let sherlock = {
  surname: 'Holmes',
  age: 64,
};
```

在这里，sherlock仍然是一个`变量`，但surname和age不是。它们是属性，与变量不同，属性属于特定的对象。

**在我们的JavaScript世界中，变量和属性的行为都类似于“连接”。但是，属性的连接是从对象开始的，而不是从代码开始的**

![image-20220410192656858](https://tva1.sinaimg.cn/large/e6c9d24egy1h14umnddcvj21120d8mxy.jpg)

在这里，我们可以看到sherlock变量指向我们创建的一个对象。该对象有两个属性。它的surname属性指向“Holmes”字符串值，它的age属性指向64个数字值。

 重要的是，**属性不包含值——它们指向值!**记住，我们的宇宙充满了`电线`。其中一些从代码(变量)开始，另一些从对象(属性)开始。所有导线总是指向值。 

在阅读本文之前，您可能会认为值存在于对象“内部”，因为它们出现在代码的“内部”。这种直觉经常会导致错误，所以我们会“在电线中思考”。再看一下代码和图表。在继续之前，确保你对他们感到舒服。

## Property Names

在命名属性时要记住的一件重要事情是，一个对象不能有两个具有相同名称的属性。例如，我们的对象不能有两个名为age的属性。

属性名也总是区分大小写!例如，age和Age从JavaScript的角度来看是两个完全不同的属性。

如果我们事先不知道属性名，但我们在代码中把它作为字符串值，我们可以使用[]“括号表示法”从对象中读取它

```js
let sherlock = { surname: 'Holmes', age: 64 };
let propertyName = prompt('What do you want to know?');
alert(sherlock[propertyName]); // Read property by its name

```

## Assigning to a Property

 当我们给属性赋值时会发生什么?

```js
sherlock.age = 65;
```

让我们把这段代码分成左右两部分，用=分隔。

- 首先，我们找出左边哪根线是sherlock.age

- 我们跟着sherlock的线，然后选age属性的线

<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h15w9wwshyj21060kqwfu.jpg" alt="image-20220410195742272" style="zoom:33%;" />

注意，我们没有按照age线写上64岁。

我们不关心它的当前值是多少。

在分配语句的左边，我们要找导线本身。  还记得我们选了哪根线吗?让我们继续

接下来，我们找出右边的值:65。

<img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h14vkqmznij20zs0jwta0.jpg" alt="image-20220410195943038" style="zoom:33%;" />

现在我们准备好执行任务了。  

最后，我们将左侧的导线指向右侧的值

<img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h14vlf7e9oj210o0komyj.jpg" alt="image-20220410200018165" style="zoom:33%;" />

我们完成了!从现在开始，读sherlock.age是65岁。

## Missing Properties(缺失属性)

您可能想知道，如果读取一个不存在的属性会发生什么

```js
let sherlock = { surname: 'Holmes', age: 64 };
console.log(sherlock.boat); // ?
```

我们知道`sherlock.boat`是一个属性表达式，但是我们的JavaScript宇宙如何决定用哪个值来“回答”我们呢?

**JavaScript使用了一组类似于下面的规则:**

1. 算出点(' . ')前面的部分的值。 

2. 如果该值为' null '或' undefined '，则立即抛出错误。

3. 检查对象中是否存在同名属性: 

   a.如果**存在**，请使用此属性指向的值回答。

   b.如果**不存在**，则使用' undefined '值回答。

这些规则有点简单，但它们已经告诉了我们很多关于JavaScript如何工作的信息!例如，sherlock指向一个没有boat属性的对象。所以`sherlock.Boat`给出的答案是undefined

```js
let sherlock = { surname: 'Holmes', age: 64 };
console.log(sherlock.boat); // undefined
```

注意，这并不意味着我们的对象有一个指向undefined的boat属性!它只有两个属性 surname 和 age

人们很容易想到`sherlock.Boat`直接对应于我们心理模型中的属性概念，但这并不完全正确。这是一个`问题`，所以JavaScript`遵循规则`来回答这个问题。

它观察‘sherlock’指向的对象，发现它**没有**的‘boat’属性，并返回给我们一个`undefined`的值，因为**这就是规则所说的**。这其中没有更深层次的原因，`计算机遵循规则`。

事实上

> 从根本上说，这是因为每个表达式都需要产生某个值，或者抛出一个错误。其他一些语言在访问不存在的属性时会抛出错误，但JavaScript不是其中之一!

现在再看看下面的代码，你能告诉我正确结果么?

```js
let sherlock = { surname: 'Holmes', age: 64 };
console.log(sherlock.boat.name); // ?
```

不要猜测哦，遵循JS的规则

Hint: 这里有两个点，所以你需要遵守规则两次。

答案是会抛出一个错误，可以按照下面的代码来拆解问题就知道了👇

```js
let sherlock = { surname: 'Holmes', age: 64 };
console.log(sherlock.boat); // undefined
console.log(sherlock.boat.name); // TypeError!
```

## 回顾

- 属性是线——有点像变量。它们都指向值。与变量不同，属性在我们的宇宙中是从`对象`开始的，变量是从`代码`开始的

- 属性属于特定的对象。一个对象上不能有多个具有相同名称的属性。

- 一般来说，你可以用三个步骤来执行赋值:

  1. 找出哪根线在左边
  2. 找出右边的值
  3. 把导线指向那个值

- 一个表达式 像下面的

  ```
  obj.property
  ```

   是分三步计算:

  1. 找出`.`左边的值
  2. 如果是` null`或` undefined `，则抛出一个错误。
  3. 如果该属性存在，结果就是它所指向的值。如果该属性不存在，则结果为`undefined `。

 注意，这种属性的心理模型仍然有些简化。目前它已经足够好了，但随着您对JavaScript领域的了解越来越多，它还需要进一步扩展。
