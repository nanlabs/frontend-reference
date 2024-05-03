# Shared Routes in Mobile App Development

When developing a mobile app using expo, we can use expo-router and shared routes. This can bring several advantages compared to projects that don't utilize this approach.

## What are Shared Routes?

Shared routes are routes that are shared between different parts of the app. This can be useful when we have a common route that is used in different parts of the app. For example, we can have a shared route for the home page that is used in the main app and in the settings page.

## Why use Shared Routes?

Faster development: Shared routes can speed up development by allowing us to reuse routes in different parts of the app.

Easier maintenance: Shared routes can make it easier to maintain the app by allowing us to update a route in one place and have the changes reflected in all parts of the app.

Better performance: Shared routes can improve performance by reducing the number of routes that need to be loaded when the app starts.

## How to use Shared Routes in a Mobile App

expo-router make routing by using file-based routing.
We need to use another expo-router functionality that is [groups](https://docs.expo.dev/router/layouts/#groups) to create shared routes.

Then we need to define a couple of layout.tsx files and some folders to organize our shared routes.

Here is an example of how we can use shared routes in a mobile app:

- first \_layouts.tsx file in root folder:

```tsx
import { Stack } from 'expo-router';

const StackLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default StackLayout;
```

with this we can define the main stack layout for the main app, with this we render the (tabs) layout and we can render others routes in this main stack layout.

- second \_layouts.tsx file in (tabs) folder:

```tsx
import { Tabs } from 'expo-router/tabs';
import React from 'react';

const AppLayout = () => {
  return (
    <Tabs
      initialRouteName="(home)"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarLabel: 'HOME',
        }}
      />
      <Tabs.Screen
        name="(feed)"
        options={{
          tabBarLabel: 'FEED',
        }}
      />
      <Tabs.Screen
        name="(example)"
        options={{
          tabBarLabel: 'EXAMPLE',
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
```

with this we can define the tabs layout for the main app, with this we render the (home), (feed) and (example) routes in the main stack layout.

- third \_layouts.tsx file in (home, feed, example) folder:

```tsx
import { Stack } from 'expo-router';

export default function DynamicLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    />
  );
}
```

with this we can define the stack layout for the (home), (feed) and (example) routes in the tabs layout.
Every file inside the (home, feed, example) folder will be a route in the tabs layout.

### For more information

You can dive deeper into the shared routes by reading the [official documentation](https://docs.expo.dev/router/advanced/shared-routes/).
