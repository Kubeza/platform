# File Upload

A production-ready, composable file upload system built for React 19 and TypeScript.

## Features

- Drag & Drop Upload
- Click to Upload
- Single File Upload
- Multiple File Upload
- Image Preview
- File Preview
- Upload Queue
- Progress Tracking
- Retry Support
- Cancel Support
- Download Support
- Validation
- Upload Status
- Enterprise-ready API
- Accessible
- Dark Mode Compatible

---

# Installation

```tsx
import {
  Upload,
  UploadDropzone,
  UploadTrigger,
  UploadPreview,
} from "@/components/ui/file-upload";
```

---

# Basic Example

```tsx
<Upload>
    <UploadDropzone />

    <UploadTrigger />

    <UploadPreview />
</Upload>
```

---

# Advanced Example

```tsx
<UploadProvider>

    <Upload>

        <UploadDropzone />

        <UploadTrigger />

        <UploadPreview />

    </Upload>

</UploadProvider>
```

---

# Component Hierarchy

```
Upload
│
├── UploadArea
├── UploadDropzone
├── UploadTrigger
├── UploadInput
├── UploadPreview
│   ├── UploadPreviewGrid
│   └── UploadPreviewItem
│       ├── UploadImage
│       ├── UploadFileIcon
│       ├── UploadProgress
│       ├── UploadStatus
│       ├── UploadBadge
│       ├── UploadMetadata
│       ├── UploadFileSize
│       ├── UploadFileName
│       ├── UploadActions
│       │   ├── UploadRetryButton
│       │   ├── UploadCancelButton
│       │   ├── UploadRemoveButton
│       │   └── UploadDownloadButton
│       └── UploadError
│
├── UploadLoading
├── UploadSuccess
└── UploadEmpty
```

---

# Hooks

- useUpload()
- useDropzone()
- useUploadQueue()
- useUploadProgress()

---

# Utilities

- formatFileSize()
- createUploadItem()
- createPreviewUrl()
- revokePreviewUrl()

---

# Validation

Supports:

- Accepted MIME types
- Accepted Extensions
- Maximum Files
- Maximum File Size

---

# Status Lifecycle

```
idle
↓
queued
↓
uploading
├── success
├── error
└── cancelled
```

---

# Accessibility

- Keyboard accessible
- Screen reader friendly
- Proper ARIA roles
- Focus management
- Semantic HTML

---

# Browser Support

- Chrome
- Edge
- Firefox
- Safari

---

# Enterprise Integrations

Designed to integrate with:

- Amazon S3
- Azure Blob Storage
- Google Cloud Storage
- Cloudflare R2
- Firebase Storage
- Supabase Storage
- MinIO

---

# Roadmap

- Chunked uploads
- Resumable uploads
- Directory uploads
- Clipboard paste uploads
- EXIF extraction
- Image optimization
- Virus scanning hooks
- Signed URL uploads
- Multipart uploads
- Background uploads
- Offline queue
- Web Workers

---

# License

MIT