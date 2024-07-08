To repro run yarn install then yarn build
The error occurs in alpha.1 as well, but NOT alpha.0

The following error occurs when I run the build command

```
Panic occurred at runtime. Please file an issue on GitHub with the backtrace below: https://github.com/web-infra-dev/rspack/issues
Message:  assertion failed: self.max_target_is_set
Location: crates\rspack_core\src\exports_info.rs:1722

Run with COLORBT_SHOW_HIDDEN=1 environment variable to disable frame filtering.
Run with RUST_BACKTRACE=full to include source snippets.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ BACKTRACE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 1: napi_register_module_v1
    at <unknown source file>
 2: napi_register_module_v1
    at <unknown source file>
 3: napi_register_module_v1
    at <unknown source file>
 4: napi_register_module_v1
    at <unknown source file>
 5: napi_register_module_v1
    at <unknown source file>
 6: wasmer_vm_imported_memory32_atomic_notify
    at <unknown source file>
 7: wasmer_vm_imported_memory32_atomic_notify
    at <unknown source file>
 8: napi_register_module_v1
    at <unknown source file>
 9: napi_register_module_v1
    at <unknown source file>
10: napi_register_module_v1
    at <unknown source file>
11: napi_register_module_v1
    at <unknown source file>
12: napi_register_module_v1
    at <unknown source file>
13: napi_register_module_v1
    at <unknown source file>
14: napi_register_module_v1
    at <unknown source file>
15: napi_register_module_v1
    at <unknown source file>
16: napi_register_module_v1
    at <unknown source file>
17: napi_register_module_v1
    at <unknown source file>
18: napi_register_module_v1
    at <unknown source file>
19: napi_register_module_v1
    at <unknown source file>
20: napi_register_module_v1
    at <unknown source file>
21: napi_register_module_v1
    at <unknown source file>
22: napi_register_module_v1
    at <unknown source file>
23: napi_register_module_v1
    at <unknown source file>
24: napi_register_module_v1
    at <unknown source file>
25: napi_register_module_v1
    at <unknown source file>
26: napi_register_module_v1
    at <unknown source file>
27: wasmer_vm_imported_memory32_atomic_notify
    at <unknown source file>
28: napi_register_module_v1
    at <unknown source file>
29: napi_register_module_v1
    at <unknown source file>
30: napi_register_module_v1
    at <unknown source file>
31: napi_register_module_v1
    at <unknown source file>
32: BaseThreadInitThunk
    at <unknown source file>
33: RtlUserThreadStart
    at <unknown source file>
```
