from django.contrib import admin

from .models import Choice, Question

# Register your models here.


class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 3
    
# class ChoiceInline(admin.StackedInline):
#     model = Choice
#     extra = 3

@admin.register(Question)
class QuestionsAdmin(admin.ModelAdmin):
    fieldsets = (
        (None, {
            "fields": (
                ['question_text']
            ),
        }),
        ('Data information', {
            "fields": (
                ['pub_date']
            )
        })
    )
    inlines = [ChoiceInline]
    list_display = ('question_text', 'pub_date', 'was_published_recently')
    search_fields = ['question_text']
