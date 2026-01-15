---
title: "{{ .Title }}"
date: {{ .Date.Format "2006-01-02" }}
{{- with .Params.categories }}
categories: {{ . | jsonify }}
{{- end }}
{{- with .Params.tags }}
tags: {{ . | jsonify }}
{{- end }}
url: {{ .Permalink }}
---

{{ .RawContent }}
