# Forms

An enterprise-grade React form toolkit built on top of React Hook Form.

## Features

- React Hook Form integration
- Enterprise layout primitives
- Validation components
- Form sections and grouping
- Async submission helpers
- Autosave support
- Draft persistence
- Multi-step wizard
- Field arrays
- Progress tracking
- Keyboard shortcuts
- Development tools

## Installation

```bash
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
} from "@/components/ui/forms";
```

## Module Structure

```
forms/
├── Form.tsx
├── FormField.tsx
├── FormItem.tsx
├── ...
├── FormWizard.tsx
├── useFormPersistence.ts
└── index.ts
```

## Example

```tsx
<Form {...form}>
  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel required>Email</FormLabel>

        <FormControl>
          <Input {...field} />
        </FormControl>

        <FormMessage />
      </FormItem>
    )}
  />
</Form>
```

## Enterprise Features

- Draft persistence
- Autosave
- Async status
- Dirty state tracking
- Validation summary
- Multi-step forms
- Dynamic field arrays
- DevTools
- Keyboard shortcuts

## Dependencies

- React 19
- React Hook Form
- Tailwind CSS
- Lucide React